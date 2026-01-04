import './App.css'
import ProductTab from './ProductTab.jsx';

function Description() {
  return <p>This is my first React app!</p>
} 

function App() {
  return (
    <>
      <h2>Blockbuster Deals | Shop Now</h2>
      <ProductTab />
    </>
  );
}
 
export default App;