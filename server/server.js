// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/your-database-name', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// Define User schema
const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

// Create User model
const User = mongoose.model('User', UserSchema);

app.post('/signup', (req, res) => {
  const { username, email, password } = req.body;

  // TODO: Validate the user data

  // Create a new user
  const newUser = new User({ username, email, password });

  // Save the user
  newUser.save()
    .then(user => res.json(user))
    .catch(err => res.status(500).json(err));
});

app.listen(3000, () => console.log('Server is running on port 3000'));