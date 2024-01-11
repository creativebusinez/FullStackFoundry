const jwt = require('jsonwebtoken'); // Import the jsonwebtoken library
const bcrypt = require('bcrypt'); // Import the bcrypt library
const usersModel = require('../models/users'); // Import the users model or module for MongoDB

// Function to hash passwords
async function hashPassword(password) {
    const saltRounds = 10; // Number of salt rounds for bcrypt
    return await bcrypt.hash(password, saltRounds); // Hash the password using bcrypt
}

// Function to validate password
async function validatePassword(plainPassword, hashedPassword) {
    return await bcrypt.compare(plainPassword, hashedPassword); // Compare the plain password with the hashed password using bcrypt
}

// Login User
const loginUser = async (req, res) => {
    try {
        console.log("Login route hit");

        const { email, password } = req.body; // Get the email and password from the request body

        const user = await usersModel.getUserByEmail(email); // Retrieve the user from MongoDB using the email

        if (!user) return res.status(401).json({ error: 'User does not exist' }); // If user does not exist, return an error response

        const validPassword = await validatePassword(password, user.password); // Validate the password

        if (!validPassword) return res.status(401).json({ error: 'Password is incorrect' }); // If password is incorrect, return an error response

        // Generate JWT token
        const accessToken = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: "1d" }); // Generate a JWT token with the user ID and a secret

        res.status(200).json({
            data: { email: user.email },
            accessToken
        }); // Send a success response with the user email and access token
    } catch (error) {
        res.status(500).json({ error: error.message }); // If an error occurs, return a server error response
    }
};

module.exports = { loginUser, hashPassword }; // Export the loginUser and hashPassword functions

// Please note that the code assumes you have a separate users model or module that interacts with the MongoDB database. You'll need to implement the getUserByEmail function in the users model or module to retrieve the user from the MongoDB collection based on the email.