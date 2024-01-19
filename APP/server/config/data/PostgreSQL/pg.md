# pg

To use PostgreSQL in a Node.js/Express app, you would typically use a package like `pg` (node-postgres) for connecting and interacting with your PostgreSQL database. Here's a step-by-step guide:

## 1. Install Node-Postgres

First, make sure Node.js is installed in your system. In your project directory, run:

```bash
npm install pg
```

## 2. Set Up PostgreSQL Database

Ensure you have PostgreSQL installed and running on your machine. Create a new database for your application.

## 3. Connect to PostgreSQL

In your main server file (e.g., `app.js` or `index.js`), import `pg` and set up a connection to your PostgreSQL database:

```javascript
const { Pool } = require('pg');

const pool = new Pool({
  user: 'yourusername',
  host: 'localhost',
  database: 'yourdbname',
  password: 'yourpassword',
  port: 5432,
});

pool.connect(err => {
  if (err) {
    console.error('connection error', err.stack);
  } else {
    console.log('Connected to PostgreSQL');
  }
});
```

Replace the connection details with your PostgreSQL credentials.

## 4. Create a Table

If you haven't already, create a table in your PostgreSQL database. This can be done through a PostgreSQL client or using SQL commands in a setup script.

### 5. Query the Database in Routes

Use the `pool` to query your PostgreSQL database in your Express routes. For example, to fetch data:

```javascript
app.get('/data', (req, res) => {
  pool.query('SELECT * FROM your_table', (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
});
```

### 6. Error Handling

Make sure to handle errors appropriately, especially for database operations.

### Additional Tips

- **Environment Variables**: Use environment variables for your database credentials.
- **Connection Pooling**: The `pg` module supports connection pooling. This is handled by creating a `Pool` instance as shown above.
- **Async/Await**: Consider using async/await for handling asynchronous database operations.

### Example Project Structure

Your project might be structured like this:

/your-node-app
|-- /node_modules
|-- /routes
|   |-- index.js
|-- app.js
|-- package.json

- `routes/index.js` - Where you define your Express routes.
- `app.js` - The main server file where you set up Express and PostgreSQL connection.

This should give you a basic setup for using PostgreSQL with a Node.js/Express application. Remember that working with databases also involves managing connections and handling errors effectively.
