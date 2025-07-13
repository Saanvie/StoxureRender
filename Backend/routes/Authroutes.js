const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const authController = require("../Controllers/AuthController");

router.post("/signup", authController.Signup);
router.post("/login", authController.Login);


module.exports = router;
