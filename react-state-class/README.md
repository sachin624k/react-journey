# ⚛️ React State & Hooks

This section focuses on **how React updates the UI**, why normal variables fail, and how **state & hooks** solve this problem.

---

## 🧠 Why State is Needed in React

A React component is **just a function**.

- Components render **only once**
- Variables inside components **do not trigger re-render**
- Updating variables only affects console / logic, **not the UI**

### ❌ Problem Example
```jsx
let count = 0;

function increment() {
  count++;
  console.log(count); // updates in console only
}
```
👉 UI does NOT update.

### ✅ What is State in React?

State is a built-in React object that:

- Stores component data
- Triggers re-render when updated
- Keeps UI in sync with data

When state changes → component re-renders automatically

### 🧪 Counter Example (Why Variables Fail)
```jsx
export default function Counter() {
  let count = 0;

  function incCount() {
    count += 1;
    console.log(count);
  }

  return (
    <div>
      <h3>Count = {count}</h3>
      <button onClick={incCount}>Increase</button>
    </div>
  );
}
```
❌ UI does NOT update

✔ Console logs change

### 🪝 Hooks in React

Hooks were introduced in React 16.8.

They allow you to:

- Use state
- Use other React features
- Without writing class components


### 🔹 useState() Hook

useState is a React Hook that lets you add a state variable to a functional component.

**Basic Syntax**
```jsx
const [state, setState] = useState(initialState);
```
**What `useState` Returns**

`useState` returns an array with exactly two values:

**1.** Current state value
- On the first render, it equals the initialState

**2.** Setter function
- Used to update the state
- Triggers a re-render of the component

### 📌 Example: Counter using useState
`Counter.jsx`
```jsx
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const incCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h3>Count = {count}</h3>
      <button onClick={incCount}>Increase</button>
    </div>
  );
}
```