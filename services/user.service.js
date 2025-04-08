const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const { sendMail } = require('../utils/mailer');

exports.createUser = async (userData) => {
  const plainPassword = userData.password; // Save before hashing
  userData.password = await bcrypt.hash(userData.password, 10);

  const user = await User.create(userData); // Save user once

  // Prepare email template data
  const emailData = {
    name: user.name,
    email: user.email,
    password: plainPassword,
  };

  // Send welcome email
  await sendMail(user.email, 'Welcome!', emailData);

  return user;
};

exports.getAllUsers = async () => {
  return await User.findAll();
};

exports.getUsersById = async(id) => {
  return await User.findByPk(id);
};

exports.deleteUsersById = async (id)=>{
  return await User.destroy({ where:{id:id}});
}
