const axios = require("axios");

const getRecipe = async (req, res) => {
  const { searchTerm } = req.query;

  const URL = `https://api.spoonacular.com/recipes/complexSearch?query=${searchTerm}&apiKey=${process.env.API_KEY}`;

  try {
    const response = await axios.get(URL);
    res.json(response.data);
  } catch (error) {
    console.log(error);
  }
};

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

module.exports = { getRecipe, getRecipeDetails };
