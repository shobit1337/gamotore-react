import React from 'react';

const ProductDetails = ({ product }) => {
  return (
    <div className='product-page-card'>
      <div className='product-page-logo'>
        <img src={product.logoImage} alt='' />
      </div>
      {product.discount > 0 ? (
        <span className='badge p-xxxxs discound-badge'>
          -{product.discount}%
        </span>
      ) : null}
      <div>
        <span className={product.discount > 0 ? 'mrp-price' : null}>
          $2,999
        </span>
        {product.discount > 0 ? (
          <span className='current-price'>
            {` ₹${((product.price / 100) * product.discount).toFixed(2)}`}
          </span>
        ) : null}
      </div>
      <div className='btn btn-accient btn-rounded'>BUY NOW</div>
      <div className='btn btn-outlined btn-rounded'>ADD TO CART</div>
      <div className='btn btn-sm btn-outlined btn-rounded'>ADD TO WISHLIST</div>
      <div className='product-page-card-detail'>
        <span className='text-dark-light text-semibold'>Developer</span>
        <span>{product.publisher}</span>
      </div>
      <div className='product-page-card-detail'>
        <span className='text-dark-light text-semibold'>Publisher</span>
        <span>{product.publisher}</span>
      </div>
      <div className='product-page-card-detail'>
        <span className='text-dark-light text-semibold'>Release Date</span>
        <span>{product.releaseDate}</span>
      </div>
      <div className='product-page-card-detail'>
        <span className='text-dark-light text-semibold'>Platform</span>
        <span>
          {product.platform.includes('mac') || true ? ` MAC ` : null}

          {product.platform.includes('windows') ? (
            <i className='fab fa-windows'></i>
          ) : null}
        </span>
      </div>
    </div>
  );
};

export default ProductDetails;
