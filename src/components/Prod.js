import React from 'react'
import './Prod.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from './Navbar';

export default function Prod() {
    const [selectedSize, setSelectedSize] = useState('');
    const { productId } = useParams();
    console.log(productId);

    const [prod, setProd] = useState([]);
    useEffect(() => {
        fetch(`https://api.escuelajs.co/api/v1/products/${productId}`)
            .then(response => response.json())
            .then(data => setProd(data))
            .catch(error => console.error(error));

    }, []);
    console.log(prod);
    const imageUrls = prod.images || [];
    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500, 
        slidesToShow: 1, 
        slidesToScroll: 1, 
      };

      const handleSizeClick = (size) => {
        setSelectedSize(size); 
      };

    const send = (obj) => {
        console.log("send function");
        console.log(obj);
        sessionStorage.setItem(obj.id,JSON.stringify(obj));
        alert("Item added to cart");
    };

    
  return (

    <div className='Prod bg-sun'>
        <Navbar/>
        <div className='outerdiv'>
            <div className='innerdiv'>
                <div className='sub1 bg-fresh'>
                    {imageUrls.length > 0 && (
                        <Slider {...settings}>
                            {imageUrls.map(imageUrl => (
                                <img key={imageUrl} src={imageUrl} alt={prod.title} />
                            ))}
                        </Slider>
                    )}
                </div>
                <div className='sub2'>
                    <div className='subsub2'>
                        <h1>{prod.title}</h1>
                        <h2 className='h22'>$ {prod.price}</h2>
                        <p className='des'>{prod.description}</p>
                        <div className='sizee'>
                            <div className='fir'>Size:</div>
                            <div ><a className='sec' href='https://www.westside.com/pages/men-size-chart' target='blank'><i class="fa-solid fa-ruler-horizontal"></i> size chart</a></div>
                        </div>
                        <div className='sizes'>
                            <div className='ss' onClick={() => handleSizeClick('S')} style={{ borderColor: selectedSize === 'S' ? 'black' : 'grey' }}>S</div>
                            <div className='ss' onClick={() => handleSizeClick('M')} style={{ borderColor: selectedSize === 'M' ? 'black' : 'grey' }}>M</div>
                            <div className='ss' onClick={() => handleSizeClick('L')} style={{ borderColor: selectedSize === 'L' ? 'black' : 'grey' }}>L</div>
                            <div className='ss' onClick={() => handleSizeClick('XL')} style={{ borderColor: selectedSize === 'XL' ? 'black' : 'grey' }}>XL</div>
                        </div>
                        <div className='buttons'>
                            <button className='b1 bg-sun' onClick={()=>send(prod)} >Add To Cart</button>
                            <button className='b2' ><i class="fa-solid fa-heart"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

