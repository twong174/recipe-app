const axios = require("axios");

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

module.exports = { getRecipeResults, getRecipeInstructions, getRecipeDetails };
