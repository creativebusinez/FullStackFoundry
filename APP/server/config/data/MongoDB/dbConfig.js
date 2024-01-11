// Import the necessary libraries
const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Log the values of the database user and password
console.log("DB User:", process.env.DB_USER);
console.log("DB Password:", process.env.DB_PASSWORD);

// Construct the MongoDB connection URL and set the database name
const url = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}`;
const dbName = process.env.DB_DATABASE;

// Create a new MongoClient instance with the connection URL and options
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

// Function to connect to the MongoDB database
async function connectToDatabase() {
    try {
        // Establish a connection to the MongoDB server
        await client.connect();
        console.log("Connected to MongoDB");

        // Return the database object for further use
        return client.db(dbName);
    } catch (error) {
        // Handle errors that occur during the connection process
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
}

// Export the connectToDatabase function for use in other modules
module.exports = connectToDatabase;