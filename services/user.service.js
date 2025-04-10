const db = require("../models/index.js");
const bcrypt = require("bcrypt");
const { sendMail } = require("../utils/mailer");

exports.createUser = async (userData) => {
  const plainPassword = userData.password;
  userData.password = await bcrypt.hash(plainPassword, 10);
  userData.referralCode = generateReferralCode();

  // Optional: Validate referredByCode (if provided)
  if (userData.referredByCode) {
    const referrer = await db.User.findOne({
      where: { referralCode: userData.referredByCode },
    });

    if (!referrer) {
      throw new Error("Invalid referral code.");
    }
  }

  // Create the user
  const user = await db.User.find(userData);

  // Prepare email template data
  const emailData = {
    name: user.name,
    email: user.email,
    password: plainPassword,
  };

  // Send welcome email
  await sendMail(user.email, "Welcome!", emailData);

  return user;
};

exports.getAllUsers = async () => {
  const data = await db.User.findAll({
    attributes: ["id", "name", "email", "pr.bio"],
    raw: true,
    subQuery: false,
    logging: console.log,
    include: [
      {
        required: false,
        as: "pr",
        model: db.Profile,
        // attributes: []
      },
    ],
  });
  console.log("data>>>>>>>>>", data);
  return data;
};

exports.getUsersById = async (id) => {
  // return await User.findOne({
  //   where: { id },
  return await db.User.findByPk(id, {
    attributes: ["id", "name", "email", "pr.bio"],
    raw: true,
    subQuery: false,
    logging: console.log,
    include: [
      {
        require: false,
        as: "pr",
        model: db.Profile,
      },
    ],
  });
};

exports.deleteUsersById = async (id) => {
  return await User.destroy({ where: { id: id } });
};

function generateReferralCode() {
  const characters = [...Array(8)].map(() => Math.random() < 0.5 
    ? String.fromCharCode(65 + Math.floor(Math.random() * 26)) // Random letter A-Z
    : Math.floor(Math.random() * 10)); // Random digit 0-9

  return characters.join('');
}