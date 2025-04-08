// const User = require("../models.");

const db = require("../models/index.js");
const bcrypt = require("bcrypt");
const { sendMail } = require('../utils/mailer');

exports.createUser = async (userData) => {
  const plainPassword = userData.password; // Save before hashing
  userData.password = await bcrypt.hash(userData.password, 10);

  const user = await db.User.create(userData); // Save user once

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
  const data =  await db.User.findAll({
    attributes: ["userId", "name", "email", "pr.bio" ],
    raw: true,
    subQuery: false,
    logging:console.log,
    include:[{
      required: false,
      as: "pr",
      model: db.Profile,
      attributes: []
    }]
  });
  console.log('data>>>>>>>>>', data)
};

exports.getUsersById = async(id) => {
  return await User.findByPk(id);
};

exports.deleteUsersById = async (id)=>{
  return await User.destroy({ where:{id:id}});
}
