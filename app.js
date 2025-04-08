const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./routes/user.routes');
const sequelize = require('./config/database');

dotenv.config();
const app = express();
app.use(express.json());
app.use('/api/users', userRoutes);

sequelize.sync({ force: false })
  .then(() => console.log('Database connected'))
  .catch((err) => console.error('DB Connection Error:', err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
