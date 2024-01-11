# APP - Integration

To build a full-stack vanilla JavaScript application, you would typically require several npm packages to handle various aspects like server setup, middleware, testing, and development tools. Below is a list of npm packages that are commonly used in such projects, categorized by their purpose:

### For the Server (Backend)

1. **Express**: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.`npm install express`

2. **CORS**: A package to enable Cross-Origin Resource Sharing.
   `npm install cors`

3. **dotenv**: Loads environment variables from a `.env` file into `process.env`.
   `npm install dotenv`

4. **morgan**: HTTP request logger middleware.
   `npm install morgan`

5. **body-parser**: Parse incoming request bodies in a middleware before your handlers.
    `npm install body-parser`

6. **nodemon** (dev dependency): Automatically restarts the node application when file changes are detected.
   `npm install --save-dev nodemon`

### For Database Interaction (If Applicable)

1. **mongoose**: If using MongoDB, Mongoose is an ODM (Object Data Modeling) library.
   `npm install mongoose`
2. **pg** and **pg-hstore**: If using PostgreSQL, these packages are for PostgreSQL integration.
   `npm install pg pg-hstore`

### For Security

1. **Express.js**:
   - **Purpose**: A web application framework for Node.js, used for setting up servers and routes. It can also be extended with various security-related middleware.
   - **Installation**: `npm install express`

2. **Helmet.js**:
   - **Purpose**: Helps secure Express.js apps by setting various HTTP headers to protect against vulnerabilities like cross-site scripting (XSS), clickjacking, etc.
   - **Installation**: `npm install helmet`

3. **Bcrypt**:
   - **Purpose**: Used for hashing passwords in a secure way, using salting to protect against brute-force attacks.
   - **Installation**: `npm install bcrypt`

4. **Validator.js**:
   - **Purpose**: A library for string validation and sanitization, crucial for input validation to prevent injection attacks.
   - **Installation**: `npm install validator`

5. **ESLint Plugin** (for secure coding practices):
   - **Purpose**: A linting tool to identify potentially vulnerable Node.js code during development.
   - **Installation**: `npm install eslint` (along with relevant plugins for security)

6. **HPP** (HTTP Parameter Pollution protection):
   - **Purpose**: Protects against HTTP Parameter Pollution attacks.
   - **Installation**: `npm install hpp`

7. **Express Mongo Sanitize**:
   - **Purpose**: Prevents MongoDB Operator Injection by sanitizing request data.
   - **Installation**: `npm install express-mongo-sanitize`

8. **Express Rate Limit**:
   - **Purpose**: Middleware to limit repeated requests to API endpoints, protecting against brute force and DoS attacks.
   - **Installation**: `npm install express-rate-limit`

Each of these packages serves a specific purpose in enhancing the security of your Node.js application, from managing HTTP headers and password hashing to preventing various types of web attacks and vulnerabilities.

For more in-depth information and best practices in Node.js security, the [OWASP Node.js Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Nodejs_Security_Cheat_Sheet.html) is a comprehensive resource.

### For Testing

1. **jest**: A delightful JavaScript Testing Framework with a focus on simplicity.
   `npm install --save-dev jest`
2. **supertest**: SuperAgent driven library for testing HTTP servers.
   `npm install --save-dev supertest`

### For Linting and Formatting

1. **eslint**: A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.
   `npm install --save-dev eslint`
2. **prettier**: An opinionated code formatter.
   `npm install --save-dev prettier``

### For the Client (Frontend)

Although you're using vanilla JavaScript for the frontend, you might still need a few packages for tasks like bundling and transpiling:

1. **webpack**: A module bundler.
   `npm install --save-dev webpack webpack-cli`

2. **babel**: A JavaScript compiler to use next generation JavaScript, today.
   `npm install --save-dev @babel/core @babel/preset-env babel-loader`

3. **live-server** (optional): A simple development HTTP server with live reload capability.
   npm install --save-dev live-server

### Utility Packages

1. **axios** (optional): Promise based HTTP client for the browser and Node.js. Useful for making HTTP requests from the frontend.
   `npm install axios`

2. **concurrently** (dev dependency): Run multiple commands concurrently. Useful in a full-stack app to run both client and server with one command.
   `npm install --save-dev concurrently`

### Templating Packages

 For templating in a full-stack vanilla JavaScript application, especially if you're focusing on server-side rendering, you would typically use templating engines that integrate well with Node.js and Express. Here are some commonly used npm packages for templating:

1. **EJS (Embedded JavaScript templating)**: A simple templating language that lets you generate HTML markup with plain JavaScript.
   `npm install ejs`

2. **Pug (formerly known as Jade)**: A high-performance template engine heavily influenced by Haml and implemented with JavaScript for Node.js and browsers.
   `npm install pug`

3. **Handlebars.js**: Provides the power necessary to let you build semantic templates effectively with no frustration.
   `npm install handlebars express-handlebars`

4. **Mustache.js**: An implementation of the mustache template system in JavaScript. It's often considered the base for more complex templating engines like Handlebars.
   `npm install mustache`

### Choosing a Templating Engine

- **EJS**: It's easy to use and requires minimal setup. It integrates seamlessly with Express and allows you to write HTML with embedded JavaScript directly.

- **Pug**: Offers a robust, elegant, and feature-rich template engine. It uses a whitespace-sensitive syntax that can make templates more readable.

- **Handlebars.js**: Known for its simplicity and flexibility. It allows for logic-less templates which can be a good option if you want to maintain a clear separation between the presentation and logic layers.

- **Mustache.js**: One of the most widely used logic-less templating engines. It's known for its simplicity and is language-agnostic.

### Integration Example with Express

Here's a quick example of how you might set up a templating engine (EJS in this case) with an Express server:

```javascript
const express = require('express');
const app = express();

// Setting the view engine to ejs
app.set('view engine', 'ejs');

// Route that renders an ejs view
app.get('/', (req, res) => {
  res.render('index', { title: 'Welcome' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

In this example, an EJS view named 'index' is rendered when navigating to the root route. You would need to create an `index.ejs` file in a `views` directory for this to work.

### Note

- Ensure that the chosen templating engine aligns with your project's requirements and coding style.
- The integration steps for different templating engines are similar but can have specific nuances, so it's important to refer to the official documentation for setup and usage details.
- Templating engines can significantly simplify the process of generating HTML on the server side, making it easier to create dynamic web pages.

### Installation

These packages can be installed via npm (Node Package Manager). Ensure you have Node.js and npm installed on your system. You can install these packages by running `npm install <package-name>` in your project's root directory.

- The choice of packages can vary based on specific requirements and preferences.
- Some packages might require additional configuration and setup.
- Always check for the latest version and compatibility of these packages.
