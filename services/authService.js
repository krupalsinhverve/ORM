const User = require("../models/user.model");
const { comparePassword } = require("../utils/hash");
const { generateToken } = require("../utils/token");

exports.login = async ({ email, password }) => {
  if (!email || !password) {
    throw new Error("Email and password are required");
  }

  const user = await User.findOne({ where: { email } });

  if (!user) throw new Error("User not found");

  const match = await comparePassword(password, user.password);
  if (!match) throw new Error("Invalid password");

  const token = generateToken({ id: user.id, email: user.email });

  return {
    message: "Login successful",
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
  };
};
