const express = require("express");
const dotenv = require("dotenv");
const sequelize = require("./config/database");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/user.routes");
const profileRoutes = require("./routes/profile.routes");
const postRoutes = require("./routes/post.routes");
const commentRoutes = require("./routes/comment.routes");
const productRoutes = require("./routes/product.routes");

dotenv.config();
const app = express();
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/post", postRoutes);
app.use("/api/comment", commentRoutes);
app.use("/api/product", productRoutes);

sequelize
  .sync({ force: false })
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("DB Connection Error:", err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
