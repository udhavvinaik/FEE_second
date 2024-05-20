import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
export default function Categoryy() {
    const { category } = useParams();
    console.log(category);

    const [cat, setCat] = useState([]);

    useEffect(() => {
        fetch(`https://api.escuelajs.co/api/v1/products/?categoryId=${category}`)
            .then(response => response.json())
            .then(data => setCat(data))
            .catch(error => console.error(error));

    }, []);
    console.log(cat);


  return (
    
    <div className='Categoryy'>
        <div className='ProductCard'>
        <div className='holder'>
            {cat.map((product) => (
            <div key={product.id} className='card'>
                <img src={product.images[0]} alt={product.title} className='cardimg' />
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
    </div>
  )
}
