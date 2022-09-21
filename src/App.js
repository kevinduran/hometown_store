import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Nav from './Nav/Nav.js'
import Products from './Products/Products.js'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Products/>
      </div>
    </Router>
  );
}

export default App;
 