# ⚛️ React – Part 4

## Objects & Arrays in State

**Important Concept**

In JavaScript, **objects and arrays are reference types**.

- Changing a key or value **does not change the reference**
- Only the **inner data changes**
- React checks **reference change**, not value change

**Object Example**
```js
{ a: 2, b: 4 }  → change b to 3
```
✔ Value changes

❌ Object reference stays the same

**Array Example**
```js
[1, 2, 4] → change any value
```
✔ Value changes
❌ Array reference stays the same

### 🚨 Problem in React State
```jsx
let [moves, setMoves] = useState({ blue: 0, red: 0 });

let updateBlue = () => {
  moves.blue += 1;      // ❌ direct mutation
  setMoves(moves);     // ❌ same object reference
};
```
**Why This Is a Problem**

- State object is mutated directly
- Same reference is passed to `setMoves`
- React **does not detect change**
- Component **may not re-render**

### ✅ Correct Way: Using Spread Operator

To make React re-render with updated values, we use the **spread operator** while updating objects in state.
```jsx
setMoves({ ...moves, blue: moves.blue + 1 });
```
**What Happens Here**

- A **new copy of the object** is created
- A new object reference is passed to `setState`
- React detects the change and **re-renders the component**

### 🔁 When New State Depends on Previous State
**Important Rule**

When the **new state depends on the previous state**, always use the **callback form** of `setState`.

**✅ Correct Pattern (Callback Form)**
```jsx
let updateBlue = () => {
  setMoves((prevMoves) => {
    return { ...prevMoves, blue: prevMoves.blue + 1 };
  });
};
```
> You can find the **Ludo Board implementation code** here:
```jsx
src/LudoBoard.jsx
```
**🖼️ Reference Image**
![Ludo Board ](./src/assets/LudoBoard.png)