import './App.css';
import Nav from './Nav/Nav.js'
import Products from './Products/Products.js'
import ProductData from './products.json'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Products productData={ProductData}/>
    </div>
  );
}

export default App;
 





