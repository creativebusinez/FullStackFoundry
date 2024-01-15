# React Fundamentals

## Section 1: React Fundamentals

## 1.1 Introduction to React and Project Setup

1. **Importance of React in Web Development**
   - React is a JavaScript library for building user interfaces.
   - It's known for its efficiency, flexibility, and the ability to create reusable UI components.
   - React's popularity in the industry makes it a valuable skill for web developers.

2. **Transitioning to Vite for Project Setup**
   - Vite is a newer, faster build tool compared to Create React App.
   - It offers fast server start, instant module reloading, and leaner builds.
   - To set up a new React project with Vite:
  Use the terminal to run `npm init vite@latest`.

## 1.2 Core React Concepts

1. **JSX (JavaScript XML)**
   - JSX allows you to write HTML in your JavaScript code.
   - It makes it easier to create and visualize UI components.
   - Example of JSX:

    ```javascript
      const element = <h1>Welcome to React!</h1>;
      ```

2. **Components**
   - React components are the building blocks of any React application.
   - Focus on function components, as they are more modern and concise compared to class components.
   - A simple function component example:

    ```javascript
      function Welcome(props) {
      return <h1>Hello, {props.name}</h1>;
      }
      ```

3. **Props (Properties)**
   - Props are how components talk to each other. They are read-only and allow you to pass data from a parent component to a child component.
   - Props are how you pass data from a parent component to a child component.
   - They are read-only, ensuring predictable behavior in your components.

4. **State**
   - State allows React components to change their output over time in response to user actions or network responses.
   - The `useState` hook is a way to add state to function components.

5. **Lifecycle Methods**
   - In class components, lifecycle methods are hooks that allow you to run code at particular times in the component’s life, such as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.
   - `useEffect` hook lets you perform side effects in function components, like fetching data, directly interacting with the DOM, etc.

6. **Hooks**
   - Hooks are functions that let you “hook into” React state and lifecycle features from function components. Common hooks include `useState`, `useEffect`, and `useContext`.

7. **Events**
   - Handling events with React elements is very similar to handling events on DOM elements, but with some syntactic differences, like using `onClick`instead of `onclick`.

8. **Conditional Rendering**
   - React allows you to render different components or elements based on a condition. This is often done using JavaScript operators like `if` or the conditional (ternary) operator.
   - Example:
     - You can render different UIs based on certain conditions.
     - Example using ternary operator:

      ```javascript
        {isLoggedIn ? <LogoutButton /> : <LoginButton />}
        ```

9. **Modular Code**
   - Use `import` and `export` to manage code across different files.
   - This approach keeps your codebase organized and maintainable.

10. **React Fragments**
    - Fragments let you group a list of children without adding extra nodes to the DOM.
    - Use `<>` and `</>` to wrap your elements.

11. **Styling**
    - Inline styling is a quick way to apply styles directly to components.
    - Example:

    ```javascript
      const divStyle = { color: 'blue', fontSize: '20px' };
      div style={divStyle}>Hello Style!</div>
      ```

12. **Lists and Keys**
    - When rendering a list of items, React uses keys to track which items have changed, been added, or been removed. Keys should be given to the elements inside the array to give the elements a stable identity.
    - Render lists of elements efficiently in React with the `map()` function and a unique `key` prop for each element.

13. **Event Handling**
    - React elements handle events similarly to DOM elements, but with camelCase syntax.
    - Example:

    ```javascript
      <button onClick={shoot}>Take the Shot!</button>
    ```

14. **Forms and Controlled Components**
    - In HTML, form elements such as `<input>`, `<textarea>`, and `<select>` typically maintain their own state. In React, mutable state is typically kept in the state property of components and only updated with `setState()`.

15. **Composition vs Inheritance**
    - React has a powerful composition model, and it is recommended to use composition instead of inheritance to reuse code between components.
    - Prefer composition over inheritance for reusable component design.

16. **Context API**
    - React provides a way to pass data through the component tree without having to pass props down manually at every level.

17. **Fragments**
    - Fragments let you group a list of children without adding extra nodes to the DOM.

18. **Higher Order Components**
    - A higher-order component is a function that takes a component and returns a new component.

19. **React Router**
    - React Router is a popular library for routing in React. React Router is a key library in React to handle routing in your applications.

20. **React and Ajax**
    - React and Ajax are two popular technologies for building web applications. Using AJAX in React to fetch data from an API and populate the state of a component.

21. **Error Boundaries**
    - Error boundaries are a way to catch errors in components and display a fallback UI. Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI.

22. **React.memo and PureComponent**
    - Techniques for optimizing performance by preventing unnecessary re-renders.
