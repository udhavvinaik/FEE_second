import React from 'react'
import './Backhome.css'
import { Link } from 'react-router-dom';
export default function Backhome() {
  return (
    <div className='Backhome'>
        <div className='ontop'>
            <div className='subtop'>
                <h3 className=''>Clothing Mega Sale</h3>
                <h1 className='text-punga'>STARTING AT 3 FOR 999</h1>
                <button className='bg-punga'><Link to="/products" className='dd'>SHOP NOW</Link></button>
            </div>
        </div>
    </div>
  )
}
