const commentService = require("../services/commentService");
const { errorResponse, successResponse } = require("../utils/responseHandler");

exports.createComment = async (req, res) => {
  try {
    const comment = await commentService.createComment(req.body);
    successResponse(res, "Comment created successfully", comment);
  } catch (error) {
    errorResponse(res, error.message);
  }
};

exports.getComments = async (req, res) => {
  try {
    const comments = await commentService.getComments();
    successResponse(res, "Comments retrieved successfully", comments);
  } catch (error) {
    errorResponse(res, error.message);
  }
};

exports.getCommentByPostId = async (req, res) => {
  try {
    const comment = await commentService.getCommentByPostId(req.params.postId);
    successResponse(res, "Comment retrieved successfully", comment);
  } catch (error) {
    errorResponse(res, error.message);
  }
};
