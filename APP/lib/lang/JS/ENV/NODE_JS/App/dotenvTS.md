
# Using dotenv with TypeScript

To integrate a `.env` file into your TypeScript-based Node.js/Express application, you'll need to use the `dotenv` package, which loads environment variables from a `.env` file into `process.env`. Here's how to set it up:

1. **Install dotenv**:
   - Run `npm install dotenv` to add `dotenv` to your project.

2. **Create a `.env` File**:
   - In your project root, create a file named `.env`.
   - Add environment-specific variables on new lines in the form of `NAME=VALUE`. For example:

     PORT=3000

   - Ensure that `.env` is included in your `.gitignore` file to prevent it from being committed to version control.

3. **Modify `app.ts` to Use dotenv**:
   - At the very top of your `app.ts` file, add `import 'dotenv/config';` to ensure `dotenv` loads the environment variables.
   - Replace the hard-coded port number with `process.env.PORT`. Here’s how your updated `app.ts` might look:

     ```typescript
     import 'dotenv/config';
     import express, { Request, Response } from 'express';

     const app = express();
     const port = process.env.PORT || 3000; // Fallback to 3000 if PORT is not defined in .env

     app.get('/', (req: Request, res: Response) => {
       res.send('Hello World from TypeScript and Express!');
     });

     app.listen(port, () => {
       console.log(`Server running at http://localhost:${port}`);
     });
     ```

4. **Run the Server**:
   - Start the server using `npm start` or `npm run dev` if you are using nodemon. The server will now use the port number defined in your `.env` file.

5. **TypeScript Definitions for process.env** (Optional):
   - If you want better type checking for your environment variables, you can create a custom type definition for `process.env`. For instance, create a file named `environment.d.ts` in your project with the following content:

     ```typescript
     declare global {
       namespace NodeJS {
         interface ProcessEnv {
           PORT: number;
           // Define other environment variables here
         }
       }
     }

     export {};
     ```

   - Make sure your `tsconfig.json` includes this file. You might need to adjust the `include` array to include all relevant directories or files.

By following these steps, your Express application will be able to use environment variables defined in a `.env` file, enhancing security and flexibility.
