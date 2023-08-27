const userModel = require("../models/userModels");
const bcrypt = require("bcryptjs");

// sign up controller
const signupController = async (req, res) => {
  try {
    
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: error.message });
  }
};

// login controller
const loginController = () => {};

module.exports = { loginController, signupController };
