import React from 'react';
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import {ToastContainer} from "react-toastify";

import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Prod from './components/Prod';
import Categoryy from './components/Categoryy';
import Payment from './components/Payment';
import Login from './components/Login';
import SignUp from './components/Register';
import Profile from './components/Profile';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <div className='auth-wrapper'>
          <div className='auth-inner'>
            <Routes>
              <Route exact path="/" element={<Login/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/register" element={<SignUp/>} />
              <Route path="/profile" element={<Profile/>} />
              <Route path="/home" element={<Home/>} />
              <Route path="/products" element={<Products/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/cart" element={<Cart/>} />
              <Route path='/Products/:productId' element={<Prod/>} />
              <Route path='/Cat/:category' element={<Categoryy/>} />
              <Route path='/Payment' element={<Payment/>} />
            </Routes>
            <ToastContainer/>
          </div>
        </div>  
      </div>
    </Router>
  );
};

export default App;
