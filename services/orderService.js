const db = require("../models/index");
const { col } = require("sequelize");

exports.getOrders = async () => {
  const orders = await db.Order.findAll({
    attributes: [
      "id",
      "productId",
      [col("product.name"), "productName"],
      [col("user.name"), "userName"],
      "total",
      "status",
      "createdAt",
    ],
    order: [["createdAt", "DESC"]],
    include: [
      {
        model: db.User,
        as: "user",
        attributes: [],
      },
      {
        model: db.Product,
        as: "product",
        attributes: [],
      },
    ],
  });

  return orders;
};

exports.getOrderById = async (id) => {
  const order = await db.Order.findByPk(id,{
    attributes: [
      "id",
      "productId",
      [col("product.name"), "productName"],
      [col("user.name"), "userName"],
      "total",
      "status",
      "createdAt",
    ],
    include: [
      {
        model: db.User,
        as: "user",
        attributes: [],
      },
      {
        model: db.Product,
        as: "product",
        attributes: [],
      },
    ],
  });
  if (!order) {
    throw new Error(`Order not found`);
  }
  return order;
};

exports.createOrder = async (data) => {
  const order = await db.Order.create(data);
  return order;
};

exports.updateOrder = async (id, data) => {
  const order = await db.Order.findByPk(id);
  if (!order) {
    throw new Error(`Order not found`);
  }
  await order.update(data);
  return order;
};

exports.deleteOrder = async (id) => {
  const order = await db.Order.findByPk(id);
  if (!order) {
    throw new Error(`Order not found`);
  }
  await order.destroy();
  return order;
};

exports.getOrderByUserId = async (id) => {
  const orders = await db.Order.findAll({
    where: {
      userId: id,
    },
    attributes: [
      "id",
      "productId",
      [col("product.name"), "productName"],
      "total",
      "status",
      "createdAt",
    ],
    order: [["createdAt", "DESC"]],
    include: [
      {
        model: db.Product,
        as: "product",
        attributes: [],
      },
    ],
  });
  return orders;
};
