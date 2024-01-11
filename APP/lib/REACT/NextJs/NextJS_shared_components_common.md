In a Next.js application, organizing your commonly shared components in a well-structured directory is crucial for maintainability and scalability. Here's an example of a high-level directory structure that you might use for these components:

```
/next-app
|-- /components
    |-- /common
        |-- Layout.tsx (Common layout for all pages)
        |-- Navbar.tsx (Navigation bar)
        |-- Footer.tsx (Footer section)
        |-- Head.tsx (Custom Head for SEO)
    |-- /ui
        |-- /buttons
            |-- Button.tsx (Reusable button component)
        |-- /forms
            |-- InputField.tsx (Reusable input field)
            |-- Form.tsx (Generic form component)
        |-- /modals
            |-- Modal.tsx (Generic modal component)
    |-- /hooks
        |-- useAuth.ts (Custom hook for authentication)
        |-- useWindowSize.ts (Custom hook for window size)
|-- /pages
|-- /public
|-- /styles
|-- /lib (or /utils)
    |-- api.ts (API utility functions)
    |-- helpers.ts (Helper functions)
```

### Explanation:

1. **/components:**
   - The main directory for all reusable components.

2. **/components/common:**
   - Contains components that are used across almost all pages like `Layout`, `Navbar`, `Footer`, and `Head`.

3. **/components/ui:**
   - This directory is dedicated to smaller UI components that might be used in various places.
   - **/buttons:** Contains different types of button components.
   - **/forms:** Holds various form-related components like input fields and a generic form component.
   - **/modals:** For modal or dialog components.

4. **/components/hooks:**
   - Custom React hooks for shared logic across components. For example, `useAuth` for authentication logic and `useWindowSize` for responsive behaviors.

5. **/pages:**
   - Contains the page components corresponding to your routes, as per Next.js's file-system-based routing.

6. **/public:**
   - For static files like images, fonts, and `robots.txt`.

7. **/styles:**
   - Global styles, mixins, and variables.

8. **/lib (or /utils):**
   - Utility functions and common libraries. For example, `api.ts` for API call functions and `helpers.ts` for miscellaneous helper functions.

This structure helps in organizing the components and utilities in a logical and scalable way, ensuring that the components are easily reusable and maintainable. The separation of UI components and common components allows for better management as the application grows.