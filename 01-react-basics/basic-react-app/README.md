# React Fundamentals (Part 1)

A comprehensive guide to getting started with React, understanding components, JSX, and project architecture.

---

## 🚀 1. What is React?

React is a **JavaScript library** used for creating User Interfaces (UI).

- **The Core Idea:** React apps are built using **Components**.
- **The Process:** We render (invoke) components to display the UI.
- **Component Composition:** A component is a bundle of HTML, JavaScript, and CSS that acts as a reusable and independent piece of code.

---

## 🏗️ 2. Understanding JSX

**JSX** stands for **JavaScript Extension Syntax**. It allows us to write HTML-like code directly inside JavaScript.

- **Not Real JavaScript:** Browsers cannot read JSX natively.
- **The Transpiler:** A tool called **Babel** converts (transpiles) JSX into regular JavaScript.
- **Conversion Flow:** `JSX` ➜ `Babel` ➜ `JavaScript`

---

## 🛠️ 3. Setting Up the Local Environment

Modern React development favors **Vite** for its speed and efficiency.

### Initialization Command

Run the following command in your terminal:

```bash
npm create vite@latest
```

## 4. Project Structure & Application Flow

Understanding how files interact is key to mastering React.

Folder Anatomy (/src)

index.html
The entry point of the application. It contains <div id="root"></div>.

main.jsx
The bridge between React and HTML. It renders the App component into the root div.

App.jsx
The main component where high-level logic and layout live.

App.css
Styles specific to the App component.

Render Flow Diagram
```
graph TD
    A[index.html] --> B(main.jsx)
    B --> C[App.jsx]
    C --> D[Title Component]
    C --> E[App.css]

## 5. Our First Component

A React component must be a function that returns JSX.

Example (App.jsx)
import "./App.css";

// A small, reusable component
function Title() {
  return <h1>I am Title</h1>;
}

// The main App component
function App() {
  return (
    <div>
      <h2>Hello!</h2>
      <Title /> {/* Nesting the Title component */}
    </div>
  );
}

export default App;

## Important Rules & Notes

File Organization: Each component should ideally live in its own file.

Single Root Rule: A component must return a single root element.

Incorrect: Returning two <div> elements side-by-side.

Correct: Wrapping multiple elements inside one parent <div> or a Fragment.

Independence: Components should be reusable and independent.