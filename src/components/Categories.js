import React from 'react'
import './Categories.css'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
export default function Categories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/categories')
            .then(response => response.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error));

    }, []);
    {console.log(categories)}
  return (
    
    <div className='Categories'>
        <h1 className='head bg-sun'>Our wide Range of Products</h1>
        <div className='catholder'>
            {categories.map((category)=>
                <Link to={`/Cat/${category.id}`} className='cat' key={category.id}>
                    <img className='catimg' src={category.image} alt='not found'/>
                    <div className='catname' >{category.name}</div>
                </Link>
            )}
        </div>

    </div>
  )
}
