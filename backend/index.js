const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const passport = require("passport");
const session = require("express-session");

const recipeRoute = require("./routes/recipeRoute");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Session configuration
app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key',
  resave: false,
  saveUninitialized: false,
}));

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/api/recipe", recipeRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});