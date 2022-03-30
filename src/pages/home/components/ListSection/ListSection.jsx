import React from 'react';
import { ProductCard } from '../../../../components';
import './ListSection.css';

const ListSection = ({ title, products }) => {
  return (
    <div className='list-section'>
      <div className='listing-heading py-md'>
        {title}
        <i className='fas fa-angle-right'></i>
      </div>
      <div className='category-list'>
        {products.length &&
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default ListSection;
