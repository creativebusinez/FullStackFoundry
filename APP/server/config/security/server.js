const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();
const authRoutes = require('./src/routes/authRoutes');
const usersRoutes = require('./src/routes/usersRoutes');

const app = express();

// Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json()); // for parsing application/json

// Default route for testing the server
app.get('/', (req, res) => {
  res.send('Welcome to the Blogging Application API!');
});

// Use auth routes
app.use('/api/auth', authRoutes);

// API Routes
app.use('/api/users', usersRoutes);

// User registration endpoint
app.post('/register', async (req, res) => {
  // Hash password and create user logic here
  // Example: const hashedPassword = await bcrypt.hash(req.body.password, 10);
});

// User login endpoint
app.post('/login', async (req, res) => {
  // User authentication logic here
  // On successful authentication, create a token
  // Example: const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
});

// Handling 404 errors - page not found
app.use((req, res) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
})

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
