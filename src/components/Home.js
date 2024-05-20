import React from 'react'
import Backhome from './Backhome'
import ProductCard from './ProductCard'
import Navbar from './Navbar'
export default function Home() {
  return (
    <div className='Home'>
        <Navbar/>
        <Backhome/>
        <h1 className='lower bg-fresh text-white'>Our Range of Products</h1>
        <ProductCard/>
            
    </div>
  )
}
