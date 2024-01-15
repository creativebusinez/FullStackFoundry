# Installing Vite

To install Vite, a build tool for web development, you can follow these steps:

1. **Create a New Project Directory**: First, create a new directory for your Vite project. You can do this using the command line:

   `mkdir my-vite-project`
   `cd my-vite-project`

2. **Initialize a New Project**: To initialize a new Vite project, you can use npm or yarn. Here, we'll use npm:

   `npm init @vitejs/app`

   Follow the prompts to set up your project. You'll be asked to choose a template (e.g., Vue, React, or Vanilla JavaScript) and other project settings.

3. **Install Dependencies**: After creating your project, navigate into the project directory:

   `cd my-vite-project`

   Then, install the project dependencies:

   `npm install`

4. **Start the Development Server**: You can start the Vite development server by running:

   `npm run dev`

   This will launch a development server and open your project in a web browser. You can start building your web application using Vite.

5. **Build for Production**: When you're ready to build your project for production, use the following command:

   `npm run build`

   This will generate optimized production-ready code in the `dist` directory.

That's it! You now have Vite installed and a basic project set up. You can start working on your web application using Vite's fast development environment.

Make sure to refer to the official Vite documentation for more details and customization options: [https://vitejs.dev/]

## Creating with --template

To create a Vite project using the latest version of a template, you can use the `--template` flag along with the `@latest` tag. Here's the command to create a Vite project using the latest version of a specific template:

`npm init vite@latest my-vite-project --template template-name`

Example:
`npm init vite@latest client --template react`

Replace `my-vite-project` with the name of your project directory, and `template-name` with the name of the template you want to use (e.g., `vue`, `react`, or `vanilla`). This command will initialize a new Vite project with the latest version of the selected template.
