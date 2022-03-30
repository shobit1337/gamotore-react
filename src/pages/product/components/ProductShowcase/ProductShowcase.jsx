import React, { useState, useEffect } from 'react';
import './ProductShowcase.css';

const ProductShowcase = ({ images }) => {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const showcaseImageInterwal = setInterval(() => {
      if (activeImage < images.length - 1) setActiveImage((no) => no + 1);
      else setActiveImage(0);
    }, 5000);
    return () => {
      clearInterval(showcaseImageInterwal);
    };
  }, [activeImage, images]);

  return (
    <div className='showcase-container'>
      <img className='showcase-image' src={images[activeImage]} alt='' />
      <div className='showcase-list'>
        {images.map((image, index) => (
          <img
            className={`showcase-list-image${
              activeImage === index ? '-active' : ''
            }`}
            key={index}
            src={image}
            onClick={() => setActiveImage(index)}
            alt=''
          />
        ))}
      </div>
    </div>
  );
};

export default ProductShowcase;
