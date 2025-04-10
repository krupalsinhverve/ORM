const db = require("../models/index");

exports.getAllProducts = async () => {
  const product = await db.Product.findAll({
    order:[
      ['id', 'DESC']
    ]
  });
  return product;
};

exports.createProduct = async (data) => {
  const product = await db.Product.create(data);
  return product;
};

exports.getProductById = async (id) => {
  const product = await db.Product.findByPk(id);
  if (!product) {
    throw new Error("Product not found");
  }
  return product;
};

exports.updateProduct = async (id, data) => {
  const product = await db.Product.findByPk(id);
  if (!product) {
    throw new Error("Product not found");
  }
  await product.update(data);
  return product;
};

exports.deleteProduct = async (id) => {
  const product = await db.Product.findByPk(id);
  if (!product) {
    throw new Error("Product not found");
  }
  await product.destroy();
  return product;
};
