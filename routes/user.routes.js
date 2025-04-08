const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router
  .route('/')
  .post(userController.registerUser) // Register a user
  .get(userController.getAllUsers); // Get all users

router
  .route('/:id')
  .get(userController.getUsersById) // Get a user by ID
  .delete(userController.deleteUsersById); // Delete a user by ID

module.exports = router;