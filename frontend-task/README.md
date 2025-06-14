# Frontend Task

This project is a responsive frontend UI built with React and SCSS, as part of a frontend developer evaluation task. It aims to closely follow design specifications for both desktop and mobile views, and includes dynamic features and animations.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Available Scripts](#available-scripts)
- [Testing](#testing)
- [Linting and Formatting](#linting-and-formatting)
- [Project Structure](#project-structure)
- [Deployment Notes](#deployment-notes)

## Features

- Responsive Navbar with search functionality and mobile hamburger menu.
- Dynamic Hero section with a looping image carousel and search inputs.
- "Six Pillars of Lifestyle Medicine" section with interactive cards.
- Integrated Login/Sign Up page with form toggling.
- Accessibility (A11y) considerations.
- SCSS for modular and maintainable styling.
- Client-side routing with React Router.
- Error Boundary and Helmet for improved user experience and SEO.

## Technologies Used

- React.js (v18)
- Vite (for fast development server and optimized builds)
- TypeScript
- SCSS (Sass)
- React Router DOM (for client-side routing)
- Font Awesome (for icons)
- React Helmet Async (for managing document head)
- React Error Boundary (for gracefully handling component errors)
- Vitest & React Testing Library (for unit and integration testing)
- ESLint & Prettier (for code linting and formatting)
- Husky & Lint-Staged (for Git hooks)

## Setup Instructions

To get the project up and running locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone <your-repo-link>
    cd frontend-task
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Activate Git Hooks (for linting/formatting before commit):**
    ```bash
    npx husky install
    ```

4.  **Place your logo (Optional):**
    If you have a company logo SVG file, place it at `public/logo.svg`. Currently, a placeholder SVG is used.

## Available Scripts

In the project directory, you can run:

-   `npm run dev`
    Runs the app in development mode.
    Open [http://localhost:5173](http://localhost:5173) to view it in your browser.
    The page will reload when you make changes.

-   `npm run build`
    Builds the app for production to the `dist` folder.
    It correctly bundles React in production mode and optimizes the build for the best performance.

-   `npm run lint`
    Runs ESLint to check for code quality issues.

-   `npm run format`
    Runs Prettier to format your code automatically.

-   `npm test`
    Launches the test runner in watch mode.

-   `npm run test:coverage`
    Runs tests and generates a coverage report.

## Testing

Tests are set up using Vitest and React Testing Library. The test setup file is located at `src/test/setup.ts`, and common testing utilities are in `src/test/utils.tsx`.

To run all tests:
```bash
npm test
```

## Linting and Formatting

ESLint is configured for code quality checks, and Prettier for consistent code formatting. Husky hooks ensure these run automatically on staged files before each commit.

## Project Structure

```
frontend-task/
├── public/
│   ├── images/
│   │   ├── hero-carousel-1.svg
│   │   │   ├── hero-carousel-2.svg
│   │   │   ├── hero-carousel-3.svg
│   │   │   └── pillars/
│   │   │       ├── pillar-nutrition.svg
│   │   │       ├── pillar-physical-activity.svg
│   │   │       ├── pillar-restorative-sleep.svg
│   │   │       ├── pillar-stress-management.svg
│   │   │       ├── pillar-social-connection.svg
│   │   │       └── pillar-substance-abuse.svg
│   │   └── logo.svg
│   ├── src/
│   │   ├── components/
│   │   │   ├── Hero/
│   │   │   │   ├── Hero.scss
│   │   │   │   └── Hero.tsx
│   │   │   ├── MobileSidebar/
│   │   │   │   ├── MobileSidebar.scss
│   │   │   │   └── MobileSidebar.tsx
│   │   │   ├── Navbar/
│   │   │   │   ├── __tests__/
│   │   │   │   │   └── Navbar.test.tsx
│   │   │   │   ├── Navbar.scss
│   │   │   │   └── Navbar.tsx
│   │   │   └── Pillars/
│   │   │   │   ├── Pillars.scss
│   │   │   │   └── Pillars.tsx
│   │   │   ├── pages/
│   │   │   │   └── AuthPage/
│   │   │   │   │   ├── AuthPage.scss
│   │   │   │   │   └── AuthPage.tsx
│   │   │   │   ├── styles/
│   │   │   │   │   └── main.scss
│   │   │   │   ├── test/
│   │   │   │   │   ├── setup.ts
│   │   │   │   │   └── utils.tsx
│   │   │   │   ├── App.tsx
│   │   │   │   └── main.jsx
│   │   │   │   ├── .eslintrc.json
│   │   │   │   ├── .prettierrc
│   │   │   │   ├── index.html
│   │   │   │   ├── package.json
│   │   │   │   ├── tsconfig.json
│   │   │   │   └── tsconfig.node.json
│   │   │   │   └── vite.config.ts
│   │   │   └──
```

## Deployment Notes

This project provides a fully functional frontend UI. For full end-to-end functionality, such as user authentication, data persistence, and dynamic content fetching (e.g., live search results), a backend API would be required.

-   **Authentication:** The Login/Sign Up forms are currently UI-only. In a real application, they would interact with a backend authentication system (e.g., JWT-based authentication).
-   **Data Management:** Dynamic content (like actual expert listings or detailed service information) would typically be fetched from a database via a backend API.
-   **Deployment:** The project can be deployed as a static site (e.g., using Netlify, Vercel, GitHub Pages) after running `npm run build`. However, features requiring a backend would need appropriate server-side deployment.
