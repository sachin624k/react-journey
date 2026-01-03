import './App.css'
import Title from "./Title.jsx";
import ProductTab from './ProductTab.jsx';

function Description() {
  return <p>This is my first React app!</p>
} 

function App() {
  return (
    <div>
      <ProductTab />
    </div>
  )
} // The app’s function itself is the component.
 
export default App;
