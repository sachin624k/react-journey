// Part - 1
// import './App.css'
// import Title from "./Title.jsx";
// import ProductTab from './ProductTab.jsx';

// function Description() {
//   return <p>This is my first React app!</p>
// } 

// function App() {
//   return (
//     <div>
//       <ProductTab />
//     </div>
//   )
// } // The app’s function itself is the component.
 
// export default App;

// Part - 2

import './App.css'
import Title from "./Title.jsx";
import ProductTab from './ProductTab.jsx';
import MsgBox from './MsgBox.jsx';

function Description() {
  return <p>This is my first React app!</p>
} 

function App() {
  return (
    <>
      <MsgBox userName="Sachin" textColor="teal" />
      <ProductTab />
    </>
  );
}
 
export default App;