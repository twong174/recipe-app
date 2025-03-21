const axios = require("axios");

const getRecipe = async (req, res) => {
  //const { searchTerm } = req.query;

  // const URL = `https://api.spoonacular.com/recipes/complexSearch?query=${searchTerm}&apiKey=${process.env.API_KEY}`;

  //const URL = `https://api.spoonacular.com/recipes/716429/information?apiKey=${process.env.API_KEY}
  `;

  try {
    const response = await axios.get(URL);
    res.json(response.data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getRecipe };
