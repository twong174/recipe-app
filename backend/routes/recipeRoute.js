const express = require("express");

const {
  getRecipe,
  getRecipeDetails,
} = require("../controllers/recipeController");

const router = express.Router();

router.get("/getRecipe", getRecipe);
router.get("/getRecipeDetails/:id", getRecipeDetails);

module.exports = router;
