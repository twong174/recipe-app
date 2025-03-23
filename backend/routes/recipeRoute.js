const express = require("express");

const {
  getRecipeResults,
  getRecipeInstructions,
  getRecipeDetails,
  getSimilarRecipes,
} = require("../controllers/recipeController");

const router = express.Router();

router.get("/getRecipeResults", getRecipeResults);
router.get("/getRecipeInstructions/:id", getRecipeInstructions);
router.get("/getRecipeDetails/:id", getRecipeDetails);
router.get("/getSimilarRecipes/:id", getSimilarRecipes);

module.exports = router;
