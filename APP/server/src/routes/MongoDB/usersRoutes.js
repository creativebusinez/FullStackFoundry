const express = require('express');
const router = express.Router();
const usersCollection = require('../models/usersModel');

// Route to get all users
router.get('/', async (req, res) => {
  try {
    const users = await usersCollection.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to create a new user
router.post('/', async (req, res) => {
  const user = new usersCollection({
    name: req.body.name,
    email: req.body.email,
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route to delete a user
router.delete('/:id', async (req, res) => {
  try {
    const deletedUser = await usersCollection.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;