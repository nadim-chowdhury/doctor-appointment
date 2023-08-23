const express = require("express");
const {
  loginController,
  signupController,
} = require("../controllers/userControllers");

const router = express.Router();

// log in route
router.post("/login", loginController);

// sign up route
router.post("/signup", signupController);

module.exports = router;
