const sequelize = require("../config/database");
const User = require("./user.model");
const Profile = require("./profile.model");

// Define associations here
User.hasMany(Profile, {
  foreignKey: "userId",
  // onDelete: "CASCADE",
  as: "pr"
});
Profile.belongsTo(User, {
  foreignKey: "userId",
  // as: "pr"
  // onDelete: "CASCADE",
});

module.exports = {
  sequelize,
  User,
  Profile,
};
