# StyleX.js

1. **StyleX**: StyleX is a simple, easy-to-use JavaScript syntax and compiler for styling web apps. StyleX combines the strengths and avoids the weaknesses of both inline styles and static CSS.

   - Related Links:
     - [StyleX Official Website](https://stylexjs.com/)

## Usage

To use Stylex in your Node.js/Express project, you'll need to follow a series of steps for installation and configuration:

1. **Install Stylex Runtime**: First, you need to install the Stylex runtime package. You can do this using npm with the command:

   ```bash
   `npm install --save @stylexjs/stylex`
   ```

2. **Configure the Compiler**: For development, configure the Babel plugin so that styles are processed at compile-time. Install the Babel plugin with:

   ```bash
   `npm install --save-dev @stylexjs/babel-plugin`
   ```

   Then, update your `babel.config.js` to include the Stylex Babel plugin. An example configuration would be:

   ```javascript
   import styleXPlugin from '@stylexjs/babel-plugin';

   const config = {
     plugins: [
       [
         styleXPlugin,
         {
           // your configuration options here
         },
       ],
     ],
   };

   export default config;
   ```

3. **Define Styles**: Styles in Stylex are defined using an object syntax and the `create()` API. Here's an example of defining styles:

   ```javascript
   import * as stylex from '@stylexjs/stylex';

   const styles = stylex.create({
     root: {
       width: '100%',
       maxWidth: 800,
       minHeight: 40,
     },
     // other styles
   });
   ```

4. **Use Styles in Your Components**: To use these styles, you need to pass them to the `props()` function. Styles can be combined and applied conditionally using standard JavaScript expressions. For instance:

   ```javascript
   import * as React from 'react';
   import * as stylex from '@stylexjs/stylex';

   function ReactDiv({ color, isActive, style }) {
     return <div {...stylex.props(
       styles.root,
       // conditional styles
     )} />;
   }
   ```

5. **Production Setup**: For production, you should extract CSS to an external file using a bundler that supports Babel, such as Webpack or Rollup.

Stylex is versatile and can be used in a variety of projects, particularly where UI is authored in JavaScript using frameworks like React, Preact, or Angular. It's designed to handle large or growing projects efficiently by compiling to atomic class names, which helps in keeping the size of the CSS bundle manageable.

For more detailed information and examples, you can refer to the Stylex [documentation](https://stylexjs.com/docs/learn/) and its [GitHub page](https://github.com/reacttips-dev/stylex).
