# install nodemon for development convenience

`npm install nodemon --save-dev`

Creating an Express server in TypeScript involves some additional steps compared to JavaScript, primarily due to the need for TypeScript compilation. Here's a detailed guide:

1. **Environment Setup**:
   - **Install Node.js**: Ensure Node.js is installed on your system. If not, download and install it from the [Node.js website](https://nodejs.org/).
   - **Create a Project Directory**: Make a directory for your project (`mkdir my-express-app-ts`) and navigate into it (`cd my-express-app-ts`).

2. **Initialize a Node.js Project**:
   - Run `npm init -y` in the terminal to create a `package.json` file with default values.

3. **Install Express and TypeScript**:
   - Install Express: `npm install express`.
   - Install TypeScript: `npm install --save-dev typescript`.
   - Install TypeScript Node: `npm install --save-dev ts-node`, which allows you to run TypeScript files directly.
   - Install TypeScript definitions for Node.js and Express: `npm install --save-dev @types/node @types/express`.

4. **TypeScript Configuration**:
   - Create a TypeScript config file: Run `npx tsc --init` to generate a `tsconfig.json` file. This file specifies the compiler options required to compile the project.

5. **Create the Main Server File**:
   - Create a file named `app.ts` (or another name of your choosing) in your project directory.

6. **Write Server Code in TypeScript**:
   - **Import Express**: At the top of your `app.ts` file, import Express: `import express from 'express';`.
   - **Initialize Express App**: `const app = express();`.
   - **Define Port**: `const port = 3000;` or use `process.env.PORT` for environmental variable support.
   - **Create Routes**: For example, a route for the home page:

        ```typescript
        app.get('/', (req, res) => {
          res.send('Hello World from TypeScript!');
        });
        ```

   - **Listen on Port**:

        ```typescript
        app.listen(port, () => {
          console.log(`Server running on http://localhost:${port}`);
        });
        ```

7. **Add Scripts for Running the Server**:
   - Modify your `package.json` to include scripts for building and starting your server:

     ```json
     "scripts": {
       "build": "tsc",
       "start": "node dist/app.js",
       "dev": "ts-node src/app.ts"
     }
     ```

   - This allows you to run `npm run build` to compile TypeScript to JavaScript, `npm run start` to run the compiled server, and `npm run dev` for development.

8. **Run the Server**:
   - For development, run `npm run dev`. This will start the server using `ts-node`.
   - To test the production build, run `npm run build` followed by `npm run start`.

9. **Additional Configuration (Optional)**:
   - **Middleware**: Implement middleware for various functionalities.
   - **Environment Variables**: Use a package like `dotenv` for managing environment variables.
   - **Advanced Routing**: Utilize Express routers for better route management.
   - **Static Files**: Serve static files with `express.static`.

10. **Testing and Deployment**:
    - **Testing**: Use testing frameworks compatible with TypeScript like Jest or Mocha with TypeScript support.
    - **Deployment**: Deploy your compiled JavaScript code to a hosting platform like Heroku or AWS.

Remember to regularly review TypeScript and Express documentation for the most up-to-date practices and configurations.

## Sample server.ts file

This `server.ts` file demonstrates a simple server setup with TypeScript and Express:

```typescript
// Importing express module
import express, { Request, Response } from 'express';

// Create a new express application instance
const app: express.Application = express();
const port: number = 5000; // Port number

// Middleware to parse JSON bodies
app.use(express.json());

// GET route at the root
app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to the TypeScript Express server!');
});

// GET route for "/hello" path
app.get('/hello', (req: Request, res: Response) => {
    res.send('Hello, TypeScript and Express!');
});

// POST route for "/data" path
app.post('/data', (req: Request, res: Response) => {
    console.log(req.body); // Log the request body to the console
    res.status(201).send({ message: 'Data received successfully', yourData: req.body });
});

// Starting the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
```

- **Imports**: It imports the necessary modules and types from Express.
- **Express App Initialization**: It initializes an Express application.
- **Middleware**: It uses `express.json()` middleware to parse incoming JSON requests.
- **Routes**:
  - The root route (`/`) sends a welcome message.
  - The `/hello` route responds with a simple greeting message.
  - The `/data` route is a POST route that logs the received data and responds with a message confirming receipt.
- **Server Start**: It starts the server on the specified port and logs a message when the server is running.

This server can be expanded with more complex routes, middleware, error handling, and integration with databases or other services as needed. Remember, for a production server, you'd also want to consider security best practices, such as using HTTPS, handling errors and exceptions properly, and potentially using a reverse proxy like Nginx.
