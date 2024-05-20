import React, { useState } from 'react'
import './Cart.css'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
export default function Cart() {
  let arr = Object.keys(sessionStorage);
  const data = [];
  let total =0;
  let n =0;
  const getitem = (key) =>{
    data.push(JSON.parse(sessionStorage[key]));
  }; 
  arr.map((key) => getitem(key));
  data.map((key)=>{total += key.price;n+=1;});
  
  const rem = (ite)=>{
    sessionStorage.removeItem(ite);
    alert("Item successfully deleted from CART , kindly refresh");
  }
  


  return (

    <div className='Cart'>
        <Navbar/>
        <div className="container">
          {data.map((item) => (
            <div className="cart-item" key={item.id}>
                <img src={item.images[0]} alt={item.title} className="product-image" />
                <div className="product-details">
                    <span className="product-name">{item.title}</span>
                    <span className="price">${item.price} </span>
                    <span className="original-price">MRP: ${item.price + 1000}</span>
                    <div className="product-desc">{item.description}</div>
                    <div className="quantity-wrapper">
                        <span className="quantity-label">Quantity:</span>
                        <span className="quantity-value">{1}</span>
                    </div>
                </div>
                <div className="actions">
                    <button className="delete-button" onClick={()=>rem(item.id)}>Delete</button>
                    <button className="save-button">Save for Later</button>
                </div>
            </div>
          ))}

          <div className='bill bg-sun'>
            <p>Order is eligible for <b>FREE</b> Delivery.</p>
            <p>Subtotal ({n}): {total}</p>
            <p>This order contains a gift.</p>
            <p className='tt'>Total: {total}</p>
            <button className='bg-vermi'><Link to="/Payment" className='text-white'>Proceed to Buy</Link></button>
          </div>
      </div>

      
    </div>
  )
}
