const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});

// Create the User model from the schema
const User = mongoose.model('User', userSchema);

// Create a user with a hashed password
const createUser = async (username, email, password) => {
    // Ensure password is a string
    if (typeof password !== 'string') {
        password = String(password);
    }

    const hashedPassword = await hashPassword(password);
    //debug the createUser function
    console.log('hashedPassword:', hashedPassword);

    const user = new User({
        username: username,
        email: email,
        password: hashedPassword
    });
    console.log('user:', user);

    return await user.save();
};
