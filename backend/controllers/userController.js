const bcrypt = require("bcrypt");
const db = require("../models/db");

const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, username, emailAddress, password } = req.body;

    const existingUserQuery = `SELECT * FROM users WHERE username = $1`;

    const existingUserResult = await db.query(existingUserQuery, [username]);

    if (existingUserResult.rows.length > 0) {
      return res.status(400).json({ error: "Username already exists" });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const insertUserQuery = `INSERT INTO users (first_name, last_name, username, email_address, password) VALUES ($1, $2, $3, $4, $5) RETURNING *`;

    const newUserResult = await db.query(insertUserQuery, [
      firstName,
      lastName,
      username,
      emailAddress,
      hashedPassword,
    ]);

    const newUser = newUserResult.rows[0];

    res
      .status(201)
      .json({ message: "User registered sucessfully", user: newUser });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { registerUser };
