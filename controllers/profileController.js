const profileService = require("../services/profileService");
const { errorResponse, successResponse } = require("../utils/responseHandler");

exports.createProfile = async (req, res) => {
  try {
    const profile = await profileService.createProfile(req.body);
    successResponse(res, "Profile created successfully", profile);
  } catch (error) {
    errorResponse(res, error.message);
  }
};

exports.getProfileById = async (req, res) => {
  try {
    const profile = await profileService.getProfileById(req.params.id);
    successResponse(res, "Profile retrieved successfully", profile);
  } catch (error) {
    errorResponse(res, error.message);
  }
};

exports.deleteProfile = async (req, res) => {
  try {
    const profile = await profileService.deleteProfile(req.params.id);
    successResponse(res, "Profile deleted successfully", profile);
  } catch (error) {
    errorResponse(res, error.message);
  }
};

// exports.updateProfile = async (req, res) => {
//   try {
//     const profile = await profileService.updateProfile(req.params.id, req.body);
//     successResponse(res, "Profile updated successfully", profile);
//   } catch (error) {
//     errorResponse(res, error.message);
//   }
// };
