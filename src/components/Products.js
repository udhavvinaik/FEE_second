import React from 'react'
import ProductCard from './ProductCard'
import Grid from './Grid'
import Categories from './Categories'
import Navbar from './Navbar'
export default function Products() {
  return (
    <div className='Products'>
        <Navbar/>
        <Grid/>
        <Categories/>
        <ProductCard/>
    </div>
  )
}
