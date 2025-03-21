const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();

const recipeRoute = require("./routes/recipeRoute");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/recipe", recipeRoute);

PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
