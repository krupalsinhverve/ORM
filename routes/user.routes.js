const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/authMiddleware");

router
  .route("/")
  .post(userController.registerUser) // Register a user
  .get(authMiddleware, userController.getAllUsers); // Get all users

router
  .route("/:id")
  .get(authMiddleware, userController.getUsersById) // Get a user by ID
  .delete(authMiddleware, userController.deleteUsersById); // Delete a user by ID

module.exports = router;
