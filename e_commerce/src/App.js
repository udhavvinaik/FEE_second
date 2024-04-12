import React from 'react';
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';


import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Contact from './components/Contact';
import Cart from './components/Cart';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </Router>
  );
};

export default App;
