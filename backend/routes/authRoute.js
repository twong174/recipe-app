const express = require("express");

const { login, logout, authStatus } = require("../controllers/authController");

const router = express.Router();

router.post("/login", login);
router.post("/logout", logout);
router.get("/authStatus", authStatus);

module.exports = router;
