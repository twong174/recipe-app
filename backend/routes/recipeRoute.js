const express = require("express");

const { getRecipe } = require("../controllers/recipeController");

const router = express.Router();

router.get("/getRecipe", getRecipe);

module.exports = router;
