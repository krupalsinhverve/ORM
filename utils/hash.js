const bcrypt = require("bcrypt");

exports.hashPassword = async (plainText) => {
  const saltRounds = 10;
  return await bcrypt.hash(plainText, saltRounds);
};

exports.comparePassword = async (plainText, hashedPassword) => {
  return await bcrypt.compare(plainText, hashedPassword);
};
