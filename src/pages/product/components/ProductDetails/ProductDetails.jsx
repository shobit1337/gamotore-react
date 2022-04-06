import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../context/auth-context';
import { useShop } from '../../../../context/shop-context';
import { getDiscountedPrice } from '../../../../utils/products';

const ProductDetails = ({ product }) => {
  const navigate = useNavigate();
  const {
    addToCart,
    addToWishlist,
    shop: {
      wishlist: { wishlistItems },
    },
  } = useShop();
  const { user } = useAuth();

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
          {product.price > 0 ? `₹${product.price}` : 'FREE'}
        </span>
        {product.discount > 0 ? (
          <span className='current-price'>
            ₹{getDiscountedPrice(product.price, product.discount)}
          </span>
        ) : null}
      </div>
      <div
        className='btn btn-accient btn-rounded'
        onClick={() => navigate('/checkout')}>
        BUY NOW
      </div>
      <div
        className='btn btn-outlined btn-rounded'
        onClick={() => addToCart(user.encodedToken, product)}>
        ADD TO CART
      </div>
      {wishlistItems.find((item) => item._id === product._id) ? (
        <div className='py-xxs text-center'> Already in your Wishlist! </div>
      ) : (
        <div
          className='btn btn-sm btn-outlined btn-rounded'
          onClick={() => addToWishlist(user.encodedToken, product)}>
          ADD TO WISHLIST
        </div>
      )}
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
          {product.platform.includes('mac') ? ` MAC ` : null}

          {product.platform.includes('windows') ? (
            <i className='fab fa-windows'></i>
          ) : null}
        </span>
      </div>
    </div>
  );
};

export default ProductDetails;
