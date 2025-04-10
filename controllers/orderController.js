const orderService = require("../services/orderService");
const { successResponse, errorResponse } = require("../utils/responseHandler");

exports.getOrders = async (req, res) => {
  try {
    const orders = await orderService.getOrders();
    successResponse(res, "Orders retrieved successfully", orders);
  } catch (error) {
    errorResponse(res, error.message);
  }
};

exports.createOrder = async (req, res) => {
  try {
    const order = await orderService.createOrder(req.body);
    successResponse(res, "Order created successfully", order);
  } catch (error) {
    errorResponse(res, error.message);
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const order = await orderService.getOrderById(req.params.id);
    successResponse(res, "Order retrieved successfully", order);
  } catch (error) {
    errorResponse(res, error.message);
  }
};

exports.updateOrder = async (req, res) => {
  try {
    const order = await orderService.updateOrder(req.params.id, req.body);
    successResponse(res, "Order updated successfully", order);
  } catch (error) {
    errorResponse(res, error.message);
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    await orderService.deleteOrder(req.params.id);
    successResponse(res, "Order deleted successfully");
  } catch (error) {
    errorResponse(res, error.message);
  }
};

exports.getOrderByUserId = async (req, res) => {
  try {    
    const orders = await orderService.getOrderByUserId(req.params.id);
    successResponse(res, "Orders retrieved successfully", orders);
  } catch (error) {
    errorResponse(res, error.message);
  }
};
