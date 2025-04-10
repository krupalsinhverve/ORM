const postService = require("../services/postService");
const { errorResponse, successResponse } = require("../utils/responseHandler");

exports.createPost = async (req, res) => {
  try {
    const post = await postService.createPost(req.body);
    successResponse(res, "Post created successfully", post);
  } catch (error) {
    errorResponse(res, error.message);
  }
};

exports.getPosts = async (req, res) => {
  try {
    const posts = await postService.getPosts();
    successResponse(res, "Posts retrieved successfully", posts);
  } catch (error) {
    errorResponse(res, error.message);
  }
};

exports.getPostById = async (req, res) => {
  try {
    const post = await postService.getPostById(req.params.id);
    successResponse(res, "Post retrieved successfully", post);
  } catch (error) {
    errorResponse(res, error.message);
  }
};

exports.getPostByUserId = async (req, res) => {
  try {
    const post = await postService.getPostByUserId(req.params.id);
    successResponse(res, "Post retrieved successfully", post);
  } catch (error) {
    errorResponse(res, error.message);
  }
};

exports.deletePost = async (req, res) => {
  try {
    const post = await postService.deletePost(req.params.id);
    successResponse(res, "Post deleted successfully", post);
  } catch (error) {
    errorResponse(res, error.message);
  }
};

exports.updatePost = async (req, res) => {
  try {
    const post = await postService.updatePost(req.params.id, req.body);
    successResponse(res, "Post updated successfully", post);
  } catch (error) {
    errorResponse(res, error.message);
  }
};
