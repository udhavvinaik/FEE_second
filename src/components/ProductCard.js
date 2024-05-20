import React, { useEffect, useState } from 'react';
import './ProductCard.css'; 
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const ProductCard = () => { 
  const [productsState, setProductsState] = useState([]); 
  const [searchTerm, setSearchTerm] = useState(''); 

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setProductsState(data))
      .catch(error => console.error(error));
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term); 
  };

  function form(link){
    let link2="";
    for(let i = 0; i < link.length; i++){
      if(link[i] === '[' || link[i] === ']' || link[i] === '"'){
        continue;
      } else {
        link2 = link2 + link[i];
      }
    }
    console.log(link2);
    return link2;
  }

  return (
    <div className='ProductCard'>
      <SearchBar onSearch={handleSearch} />
      <div className='holder'>
        {productsState.filter((product) => 
          product.title.toLowerCase().includes(searchTerm) && product.images.length > 0
        ).map((product) => (
          <div key={product.id} className='card'>
            <img src={form(product.images[0]) } alt={product.title} className='cardimg' />
            
            <div className='subdiv'>
              <h4 className='cardtte'>{product.title}</h4>
              <p className='cardpr'>${product.price}</p>
              <button className='cardbtn bg-vermi text-white'>
                <Link to={`/Products/${product.id}`} className='text-white bn'>BUY NOW</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
