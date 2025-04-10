const productService = require("../services/productService");
const { errorResponse, successResponse } = require("../utils/responseHandler");

exports.getAllProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    successResponse(res, "Products retrieved successfully", products);
  } catch (error) {
    errorResponse(res, error.message);
  }
};

exports.createProduct = async (req, res) => {
  try {
    const product = await productService.createProduct(req.body);
    successResponse(res, "Product created successfully", product);
  } catch (error) {
    errorResponse(res, error.message);
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await productService.getProductById(req.params.id);
    successResponse(res, "Product retrieved successfully", product);
  } catch (error) {
    errorResponse(res, error.message);
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const product = await productService.updateProduct(req.params.id, req.body);
    successResponse(res, "Product updated successfully", product);
  } catch (error) {
    errorResponse(res, error.message);
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    await productService.deleteProduct(req.params.id);
    successResponse(res, "Product deleted successfully");
  } catch (error) {
    errorResponse(res, error.message);
  }
};
