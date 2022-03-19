import React from 'react';
import { Filters, Loader, ProductCard } from '../../components';

const BrowseProductPage = () => {
  return (
    <>
      <h4 className='cart-title border-top py-sm'>Browse</h4>

      {/* Product Listing Container  */}
      <div className='product-container'>
        <div className='product-listing-container'>
          <div className='text-sm text-dark-lighter py-xs'>
            Sort By:
            <span className='dropdown text-light'>
              <span className='dropdown-title'>
                {' '}
                New Release <i className='fas fa-angle-down'></i>
              </span>
              <div className='dropdown-menu'>
                <li className='list-item'>Relevance</li>
                <li className='list-item dropdown-item-selected'>
                  New Release
                </li>
                <li className='list-item'>Comming Soon</li>
                <li className='list-item'>Alphabetical</li>
                <li className='list-item'>Price: Low to High</li>
                <li className='list-item'>Price: High to Low</li>
              </div>
            </span>
          </div>
          <div className='product-listing'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
          <Loader />
          {/* Pagination */}
          <div className='pagination'>
            <button className='pagination-btn'>&laquo;</button>
            <button className='pagination-btn'>1</button>
            <button className='pagination-btn active'>2</button>
            <button className='pagination-btn'>3</button>
            <button className='pagination-btn'>4</button>
            <button className='pagination-btn'>5</button>
            <button className='pagination-btn'>6</button>
            <button className='pagination-btn'>&raquo;</button>
          </div>
        </div>
        <Filters />
      </div>
    </>
  );
};

export default BrowseProductPage;
