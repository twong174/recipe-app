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

module.exports = {
  getRecipeResults,
  getRecipeInstructions,
  getRecipeDetails,
  getSimilarRecipes,
  saveRecipe,
};
