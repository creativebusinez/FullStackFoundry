# Common Routes

Before using this code, ensure you have Node.js installed and have initialized a Node.js project in your working directory (using `npm init`). You'll also need to install Express:

```bash
npm install express
```

Here's the `app.js`:

```javascript
const express = require('express');
const app = express();

app.use(express.json());

// Home Page
app.get('/', (req, res) => {
    res.send('Welcome to the Web App!');
});

// User Authentication Routes
app.post('/login', (req, res) => {
    // User login logic
    res.send('Login endpoint');
});

app.post('/logout', (req, res) => {
    // User logout logic
    res.send('Logout endpoint');
});

app.post('/register', (req, res) => {
    // User registration logic
    res.send('Registration endpoint');
});

// CRUD Operations for a Generic Resource (e.g., "items")
app.get('/items', (req, res) => {
    // Get a list of items
    res.send('List of items');
});

app.post('/items', (req, res) => {
    // Create a new item
    res.send('Item created');
});

app.get('/items/:id', (req, res) => {
    // Get a specific item by id
    res.send(`Item with id ${req.params.id}`);
});

app.put('/items/:id', (req, res) => {
    // Update a specific item by id
    res.send(`Item with id ${req.params.id} updated`);
});

app.delete('/items/:id', (req, res) => {
    // Delete a specific item by id
    res.send(`Item with id ${req.params.id} deleted`);
});

// Static Content Delivery (e.g., Terms of Service, Privacy Policy)
app.get('/terms-of-service', (req, res) => {
    res.send('Terms of Service page');
});

app.get('/privacy-policy', (req, res) => {
    res.send('Privacy Policy page');
});

// 404 Error Handler for Unmatched Routes
app.use((req, res) => {
    res.status(404).send("404 Not Found");
});

// Server Setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
```

This `app.js` file includes the following:

1. **Home Page Route**: A simple welcome message for the root URL.
2. **User Authentication**: Basic routes for user login, logout, and registration.
3. **CRUD Operations**: Generic routes for creating, reading, updating, and deleting items. These can be adapted for any resource type (like users, posts, products).
4. **Static Content Delivery**: Routes for delivering static content like Terms of Service and Privacy Policy pages.
5. **404 Error Handler**: A catch-all route for handling unmatched URLs.

To start your server, run:

```bash
node app.js
```
