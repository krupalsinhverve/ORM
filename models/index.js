const sequelize = require("../config/database");
const User = require("./user.model");
const Profile = require("./profile.model");
const Post = require("./post.model");
const Comment = require("./comments.model");
const Product = require("./product.model");
const Order = require("./order.model");

// Define associations here

// profile table
User.hasOne(Profile, {
  foreignKey: "userId",
  onDelete: "CASCADE",
  as: "pr",
});
Profile.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

// Post Tabel
User.hasMany(Post, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});
Post.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
  as: "user",
});

// Post ↔ Comment
Post.hasMany(Comment, {
  foreignKey: "postId",
  onDelete: "CASCADE",
});
Comment.belongsTo(Post, {
  foreignKey: "postId",
  onDelete: "CASCADE",
});

// User ↔ Comment
User.hasMany(Comment, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});
Comment.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
  as: "user",
});

//user to order
User.hasMany(Order, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});
Order.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
  as: "user",
});

//product to order
Product.hasMany(Order, {
  foreignKey: "productId",
  onDelete: "CASCADE",
});
Order.belongsTo(Product, {
  foreignKey: "productId",
  onDelete: "CASCADE",
  as: "product",
});

module.exports = {
  sequelize,
  User,
  Profile,
  Post,
  Comment,
  Product,
  Order,
};
