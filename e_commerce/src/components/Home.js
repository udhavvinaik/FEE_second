import React from 'react'
import Backhome from './Backhome'
import Products from './Products'
import ProductCard from './ProductCard'
export default function Home() {
  return (
    <div className='Home'>
        <Backhome/>
        <h1 className='lower bg-fresh text-white'>Our Range of Products</h1>
        <ProductCard/>
            
    </div>
  )
}
