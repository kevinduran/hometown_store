import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Nav from './Nav/Nav.js'
import Products from './Products/Products.js'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Products/>
    </div>
  );
}

export default App;
 