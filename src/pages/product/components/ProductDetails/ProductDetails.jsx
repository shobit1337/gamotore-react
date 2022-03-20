import React from 'react';

const ProductDetails = () => {
  return (
    <div className='product-page-card'>
      <img
        style={{ padding: '20px' }}
        src='https://cdn2.unrealengine.com/egs-cyberpunk2077-cdprojektred-ic1-400x400-82b90aa9a275.png?h=270&resize=1&w=480'
        alt=''
      />
      <div className='badge'>BASE GAME</div>
      <span className='current-price'>$2,999</span>
      <div className='btn btn-accient btn-rounded'>BUY NOW</div>
      <div className='btn btn-outlined btn-rounded'>ADD TO CART</div>
      <div className='btn btn-sm btn-outlined btn-rounded'>ADD TO WISHLIST</div>
      <div className='product-page-card-detail'>
        <span className='text-dark-light text-semibold'>Developer</span>
        <span>CD PROJJECT RED</span>
      </div>
      <div className='product-page-card-detail'>
        <span className='text-dark-light text-semibold'>Publisher</span>
        <span>CD PROJJECT RED</span>
      </div>
      <div className='product-page-card-detail'>
        <span className='text-dark-light text-semibold'>Developer</span>
        <span>12/10/20</span>
      </div>
      <div className='product-page-card-detail'>
        <span className='text-dark-light text-semibold'>Developer</span>
        <span>
          <i className='fab fa-windows'></i>
        </span>
      </div>
    </div>
  );
};

export default ProductDetails;
