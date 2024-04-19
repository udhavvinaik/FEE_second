import React, { useEffect, useState } from 'react';
import './ProductCard.css'
import { Link } from 'react-router-dom';

const ProductCard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error(error));

  }, []);


  return (
    <div className='ProductCard'>
      
      <div className='holder'>
        {products.map(product => (
          <div key={product.id} className='card'>
            <img src={product.images[0]} alt={product.title} className='cardimg'/>
            <div className='subdiv'>
              <h4 className='cardtte'>{product.title}</h4>
              <p className='cardpr'>${product.price}</p>
              <button className='cardbtn bg-vermi text-white'>
                
                <Link to={`/Products/${product.id}`}  className='text-white bn'>BUY NOW</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;