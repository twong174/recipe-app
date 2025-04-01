const express = require("express");

const {
  getRecipeResults,
  getRecipeInstructions,
  getRecipeDetails,
  getSimilarRecipes,
  saveRecipe,
  checkSavedRecipe,
  getSavedRecipe,
} = require("../controllers/recipeController");

const router = express.Router();

router.get("/getRecipeResults", getRecipeResults);
router.get("/getRecipeInstructions/:id", getRecipeInstructions);
router.get("/getRecipeDetails/:id", getRecipeDetails);
router.get("/getSimilarRecipes/:id", getSimilarRecipes);
router.post("/saveRecipe", saveRecipe);
router.get("/checkSavedRecipe/", checkSavedRecipe);
router.get("/getSavedRecipe", getSavedRecipe);

module.exports = router;
