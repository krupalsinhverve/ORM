const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

// Configure mail transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Function to send email with HTML template
exports.sendMail = async (to, subject, data) => {
  try {
    const templatePath = path.join(__dirname, "../templates/welcome.html");
    let template = fs.readFileSync(templatePath, "utf8");

    // Replace placeholders with actual values
    template = template
      .replace(/{{name}}/g, data.name)
      .replace(/{{email}}/g, data.email)
      .replace(/{{password}}/g, data.password);

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      html: template,
    });

    console.log("Email sent successfully to", to);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
