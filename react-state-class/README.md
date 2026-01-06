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
