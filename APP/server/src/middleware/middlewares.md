# Middleware

To complement the `app.js` structure and the controller files, we'll create middleware functions that are commonly used in web applications. These middleware functions can handle various tasks such as logging, error handling, authentication, and validation.

Here's an example setup for some middleware functions that would be useful for your application:

## 1. Logger Middleware (loggerMiddleware.js)

This middleware logs each request to the console. It's useful for debugging and monitoring.

```javascript
const loggerMiddleware = (req, res, next) => {
    console.log(`${new Date().toISOString()} - [${req.method}]: ${req.path}`);
    next();
};

module.exports = loggerMiddleware;
```

### 2. Error Handling Middleware (errorHandlerMiddleware.js)

This middleware handles errors that occur in the application.

```javascript
const errorHandlerMiddleware = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
};

module.exports = errorHandlerMiddleware;
```

## 3. Authentication Middleware (authMiddleware.js)

This is a placeholder for authentication logic. In a real application, it would verify the user's token or session.

```javascript
const authMiddleware = (req, res, next) => {
    // Placeholder for authentication logic
    // If authenticated, call next(), else respond with an error or redirect
    if (/* user is authenticated */) {
        next();
    } else {
        res.status(401).send('Unauthorized');
    }
};

module.exports = authMiddleware;
```

### 4. Request Validation Middleware (validationMiddleware.js)

This middleware can be used to validate request bodies before they reach the controller.

```javascript
const validationMiddleware = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body);
        if (error) {
            res.status(400).send(error.details[0].message);
        } else {
            next();
        }
    };
};

module.exports = validationMiddleware;
```

## Integrating Middleware in app.js

You would import and use these middleware functions in your `app.js`. For example:

```javascript
const express = require('express');
const loggerMiddleware = require('./middleware/loggerMiddleware');
const errorHandlerMiddleware = require('./middleware/errorHandlerMiddleware');
const authMiddleware = require('./middleware/authMiddleware');
// ... other middleware ...

const app = express();

app.use(express.json());
app.use(loggerMiddleware);

// Example of using authentication middleware on a route
app.get('/protected-route', authMiddleware, (req, res) => {
    res.send('This is a protected route');
});

// ... other routes ...

// Error handling middleware should be the last piece of middleware
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
```

In this setup, `loggerMiddleware` is applied globally, logging all requests. The `errorHandlerMiddleware` is used at the end to catch any unhandled errors in the application. The `authMiddleware` is an example of route-specific middleware, protecting certain routes. The `validationMiddleware` would be used where you have specific validation rules for request bodies.

These middleware functions can be expanded and customized as per the specific needs of your application. Let me know if there's a particular middleware functionality you're interested in or if you need further assistance!
