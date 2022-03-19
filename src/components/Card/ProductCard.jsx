import React from 'react';

const ProductCard = () => {
  return (
    <a href='/pages/product.html' className='product-card'>
      <div className='product-card-image'>
        <div className='product-card-overlay'>
          <i className='fas fa-plus-circle'></i>
        </div>
        <img
          src='https://cdn1.epicgames.com/salesEvent/salesEvent/EN_R6E_STD_EPIC_Store%20Portrait_1200x1600_UK_1200x1600-9859512196094e740761af80c09a41d6?h=854&resize=1&w=640'
          alt='game'
        />
      </div>
      <div className='product-card-main'>
        <div className='product-card-title'>Riders Republic</div>
        <p>
          {' '}
          <div className='badge discound-badge'>-50%</div>{' '}
          <span className='mrp-price'>₹2,999</span>{' '}
          <span className='current-price'>₹1499.50</span>
        </p>
      </div>
    </a>
  );
};

export default ProductCard;
