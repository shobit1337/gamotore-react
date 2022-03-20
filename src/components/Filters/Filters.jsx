import React from 'react';

const Filters = () => {
  return (
    <div className='cart-page-card'>
      <div className='d-flex justify-between items-center py-xxs'>
        <span className='text-sm'>Filters [2]</span>
        <span className='text-xs'>RESET</span>
      </div>
      <div className='input-text-group input-rounded'>
        <i className='fas fa-search'></i>
        <input type='text' placeholder='Keywords' className='input-field' />
      </div>
      <div className='border-top filter-category  filter-category-open'>
        <span className='filter-category-title'>
          PRICE <i className='fas fa-angle-down'></i>
        </span>
        <ul className='filter-category-container'>
          <li className='filter-item'>Free</li>
          <li className='filter-item'>Under ₹750.00</li>
          <li className='filter-item'>Under ₹1,500.00</li>
          <li className='filter-item'>Under ₹2,250.00</li>
          <li className='filter-item'>₹1,099.00 and above</li>
          <li className='filter-item'>Discounted</li>
        </ul>
      </div>
      <div className='filter-category filter-category-open'>
        <span className='filter-category-title'>
          PLATFORM <i className='fas fa-angle-down'></i>
        </span>
        <ul className='filter-category-container'>
          <li className='filter-item'>Windows</li>
          <li className='filter-item'>Mac OS</li>
        </ul>
      </div>
    </div>
  );
};

export default Filters;
