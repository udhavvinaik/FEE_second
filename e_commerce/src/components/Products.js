import React from 'react'
import ProductCard from './ProductCard'
import Grid from './Grid'
import Categories from './Categories'
export default function Products() {
  return (
    <div className='Products'>
        <Grid/>
        <Categories/>
        <ProductCard/>
    </div>
  )
}
