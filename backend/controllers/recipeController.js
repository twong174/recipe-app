const axios = require("axios");
const db = require("../models/db");

// API call for the Recipe Search Result page
const getRecipeResults = async (req, res) => {
  const { searchTerm } = req.query;
  try {
    const URL = `https://api.spoonacular.com/recipes/complexSearch?query=${searchTerm}&apiKey=${process.env.API_KEY}`;
    const response = await axios.get(URL);
    res.json(response.data);
  } catch (error) {
    console.log(error);
  }
};

// API call for recipe instructions
const getRecipeInstructions = async (req, res) => {
  const { id } = req.params;

  try {
    const URL = `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${process.env.API_KEY}`;
    const response = await axios.get(URL);
    res.json(response.data);
  } catch (error) {
    console.log(error);
  }
};

// API call for recipe ingredients and nutrition
const getRecipeDetails = async (req, res) => {
  const { id } = req.params;

  const URL = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.API_KEY}&includeNutrition=true`;

  try {
    const response = await axios.get(URL);
    res.json(response.data);
  } catch (error) {
    console.log(error);
  }
};

const getSimilarRecipes = async (req, res) => {
  const { id } = req.params;
  const URL = `https://api.spoonacular.com/recipes/${id}/similar?apiKey=${process.env.API_KEY}`;

  try {
    const response = await axios.get(URL);
    res.json(response.data);
  } catch (error) {
    console.log(error);
  }
};

const saveRecipe = async (req, res) => {
  try {
    const { title, recipeId, userId } = req.body; // Add userId to the request body

    // Check if the recipe is already saved by the user
    const existingRecipeQuery =
      "SELECT * FROM saved_recipes WHERE recipe_id = $1 AND user_id = $2"; // Include user_id in the check

    const existingRecipeResult = await db.query(existingRecipeQuery, [
      recipeId,
      userId, // Pass userId to the query
    ]);

    if (existingRecipeResult.rows.length > 0) {
      return res.status(400).json({ error: "Recipe already saved!" });
    }

    // Insert the new saved recipe
    const insertRecipeQuery = `
      INSERT INTO saved_recipes (title, recipe_id, user_id) 
      VALUES ($1, $2, $3) 
      RETURNING *
    `;

    const newRecipeResult = await db.query(insertRecipeQuery, [
      title,
      recipeId,
      userId, // Pass userId to the query
    ]);

    const newSavedRecipe = newRecipeResult.rows[0];

    res.status(201).json({
      message: "Recipe saved successfully",
      savedRecipe: newSavedRecipe,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const checkSavedRecipe = async (req, res) => {
  try {
    const { recipeId, userId } = req.query;

    const checkQuery = `SELECT * FROM saved_recipes WHERE recipe_id = $1 AND user_id = $2`;

    const result = await db.query(checkQuery, [recipeId, userId]);

    res.json({ isSaved: result.rows.length > 0 });
  } catch (error) {
    console.log(error);
  }
};

const getSavedRecipe = async (req, res) => {
  try {
    const { userId } = req.query;

    const savedRecipeQuery = `SELECT recipe_id FROM saved_recipes WHERE user_id = $1`;
    const savedRecipeResult = await db.query(savedRecipeQuery, [userId]);

    if (savedRecipeResult.rows.length === 0) {
      return res.json([]);
    }

    const recipeIds = savedRecipeResult.rows
      .map((row) => row.recipe_id)
      .join(",");

    const URL = `https://api.spoonacular.com/recipes/informationBulk?ids=${recipeIds}&apiKey=${process.env.API_KEY}`;
    const response = await axios.get(URL);
    res.json(response.data);
  } catch (error) {
    console.log(error);
  }
};

const createRecipe = async (req, res) => {
  const client = await db.pool.connect();
  try {
    await client.query('BEGIN');
    
    const { 
      userId,
      title,
      photoUrl,
      servings,
      cookTime,
      visibility,
      ingredients,
      directions
    } = req.body;

    // Insert main recipe info
    const recipeQuery = `
      INSERT INTO my_recipes (
        user_id, 
        title, 
        photo_url, 
        servings, 
        cook_time, 
        visibility
      ) 
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING recipe_id
    `;
    
    const recipeResult = await client.query(recipeQuery, [
      userId,
      title,
      photoUrl,
      servings,
      cookTime,
      visibility
    ]);
    
    const recipeId = recipeResult.rows[0].recipe_id;

    // Insert ingredients
    if (ingredients && ingredients.length > 0) {
      const ingredientValues = ingredients.map((ing, index) => 
        `(${recipeId}, ${client.escapeLiteral(ing.quantity)}, ${client.escapeLiteral(ing.unit)}, ${client.escapeLiteral(ing.name)}, ${client.escapeLiteral(ing.details || '')}, ${index})`
      ).join(',');
      
      const ingredientQuery = `
        INSERT INTO recipe_ingredients (
          recipe_id, 
          quantity, 
          unit, 
          name, 
          details, 
          sort_order
        ) 
        VALUES ${ingredientValues}
      `;
      await client.query(ingredientQuery);
    }

    // Insert directions
    if (directions && directions.length > 0) {
      const directionValues = directions.map((dir, index) => 
        `(${recipeId}, ${index + 1}, ${client.escapeLiteral(dir.instruction)}, ${index})`
      ).join(',');
      
      const directionQuery = `
        INSERT INTO recipe_directions (
          recipe_id, 
          step_number, 
          instruction, 
          sort_order
        ) 
        VALUES ${directionValues}
      `;
      await client.query(directionQuery);
    }

    await client.query('COMMIT');
    
    res.status(201).json({
      message: "Recipe created successfully",
      recipeId
    });
  } catch (error) {
    await client.query('ROLLBACK');
    console.error("Error creating recipe:", error);
    res.status(500).json({ error: "Failed to create recipe" });
  } finally {
    client.release();
  }
};

const getCreatedRecipe = async (req, res) => {
  try {
    const { recipeId } = req.params;

    // Get main recipe info
    const recipeQuery = 'SELECT * FROM my_recipes WHERE recipe_id = $1';
    const recipeResult = await db.query(recipeQuery, [recipeId]);
    
    if (recipeResult.rows.length === 0) {
      return res.status(404).json({ error: "Recipe not found" });
    }

    const recipe = recipeResult.rows[0];

    // Get ingredients
    const ingredientsQuery = `
      SELECT * FROM recipe_ingredients 
      WHERE recipe_id = $1 
      ORDER BY sort_order ASC
    `;
    const ingredientsResult = await db.query(ingredientsQuery, [recipeId]);
    recipe.ingredients = ingredientsResult.rows;

    // Get directions
    const directionsQuery = `
      SELECT * FROM recipe_directions 
      WHERE recipe_id = $1 
      ORDER BY sort_order ASC
    `;
    const directionsResult = await db.query(directionsQuery, [recipeId]);
    recipe.directions = directionsResult.rows;

    res.json(recipe);
  } catch (error) {
    console.error("Error fetching recipe:", error);
    res.status(500).json({ error: "Failed to fetch recipe" });
  }
};


module.exports = {
  getRecipeResults,
  getRecipeInstructions,
  getRecipeDetails,
  getSimilarRecipes,
  saveRecipe,
  checkSavedRecipe,
  getSavedRecipe,
  createRecipe,
  getCreatedRecipe
};
