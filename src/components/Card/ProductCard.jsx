import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleAddToWishlist = (e) => {
    e.stopPropagation();
  };
  return (
    <div
      onClick={() => navigate(`/product/${product._id}`)}
      className='product-card'>
      <div className='product-card-image'>
        <div className='product-card-overlay'>
          <i className='fas fa-plus-circle' onClick={handleAddToWishlist}></i>
        </div>
        <img src={product.thumbnailImage} alt='game' loading='lazy' />
      </div>
      <div className='product-card-main'>
        <div className='product-card-title'>{product.title}</div>
        {product.price > 0 ? (
          <p>
            {product.discount > 0 ? (
              <span className='badge discound-badge'>-{product.discount}%</span>
            ) : null}
            <span className={product.discount > 0 ? 'mrp-price' : null}>
              ₹{product.price}
            </span>{' '}
            {product.discount > 0 ? (
              <span className='current-price'>
                ₹{((product.price / 100) * product.discount).toFixed(2)}
              </span>
            ) : null}
          </p>
        ) : (
          <p>
            <span className='badge discound-badge'>FREE</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
