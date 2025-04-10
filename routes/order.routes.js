const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

router
  .route("")
  .get(orderController.getOrders)
  .post(orderController.createOrder);

router
  .route("/:id")
  .get(orderController.getOrderById)
  .put(orderController.updateOrder)
  .delete(orderController.deleteOrder);

router.route("/:id/user").get(orderController.getOrderByUserId);

module.exports = router; //export the router
