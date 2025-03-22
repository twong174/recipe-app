const express = require("express");

const {
  getRecipeResults,
  getRecipeInstructions,
  getRecipeDetails,
} = require("../controllers/recipeController");

const router = express.Router();

router.get("/getRecipeResults", getRecipeResults);
router.get("/getRecipeInstructions/:id", getRecipeInstructions);
router.get("/getRecipeDetails/:id", getRecipeDetails);

module.exports = router;
