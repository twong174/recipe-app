const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const passport = require("passport");
const session = require("express-session");

require("./config/passportConfig");

const recipeRoute = require("./routes/recipeRoute");
const userRoute = require("./routes/userRoute");
const authRoute = require("./routes/authRoute");

const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// Session configuration
app.use(
  session({
    secret: process.env.SESSION_SECRET || "your-secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, httpOnly: true },
  })
);

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/api/recipe", recipeRoute);
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
