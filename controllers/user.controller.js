const userService = require('../services/user.service');
const { successResponse, errorResponse } = require('../utils/responseHandler');

exports.registerUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    successResponse(res, 'User registered successfully', user, 201);
  } catch (error) {
    errorResponse(res, error.message);
  }
};
exports.getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    successResponse(res, 'Users fetched successfully', users);
  } catch (error) {
    errorResponse(res, error.message);
  }
};
exports.getUsersById = async (req, res) => {
  try {
    const user = await userService.getUsersById(req.params.id);
    if(!user) return errorResponse(res, 'User not found');
    successResponse(res, 'User fetched successfully', user);
  } catch (error) {
    errorResponse(res, error.message);
  }
};
exports.deleteUsersById = async (req, res) => {
  try {
    const user = await userService.deleteUsersById(req.params.id);
    if(!user) return errorResponse(res, 'User not found');
    successResponse(res, 'User deleted successfully', user);
  } catch (error) {
    errorResponse(res, error.message);
  }
};