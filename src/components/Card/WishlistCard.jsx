import React from 'react';
import { useAuth } from '../../context/auth-context';
import { useShop } from '../../context/shop-context';
import { getDiscountedPrice } from '../../utils/products';

const WishlistCard = ({ wishlist }) => {
  const { removeFromWishlist, moveToCart } = useShop();
  const {
    user: { encodedToken },
  } = useAuth();

  return (
    <div className='cart-card'>
      <img src={wishlist.thumbnailImage} alt='wishlist-thumbnail' />
      <div className='d-flex flex-column justify-between flex-grow'>
        <div className='d-flex justify-between'>
          <div className='d-flex gap-xxxs flex-column'>
            <div className='badge'>BASE GAME</div>
            <div className='product-name'>{wishlist.title}</div>
          </div>

          <div className='d-flex gap-xxxs flex-column'>
            <div className='d-flex items-center justify-between gap-sm'>
              {wishlist.discount ? (
                <>
                  <span className='badge'>-{wishlist.discount}%</span>
                  <span className='mrp-price text-dark-lighter'>
                    ₹{wishlist.price}
                  </span>
                  <span className='current-price'>
                    ₹{getDiscountedPrice(wishlist.price, wishlist.discount)}
                  </span>
                </>
              ) : (
                <span className='current-price'>₹{wishlist.price}</span>
              )}
            </div>
            {wishlist.discount ? (
              <span> Sale ends 3/4/2022 at 4:30 AM </span>
            ) : null}
          </div>
        </div>

        <div className='d-flex justify-between items-center'>
          <i className='fab fa-windows'></i>
          <div className='d-flex items-center gap-sm'>
            <button
              className='link text-dark-lighter'
              onClick={() => removeFromWishlist(encodedToken, wishlist._id)}>
              Remove
            </button>
            <button
              className='btn btn-outlined btn-rounded btn-light btn-sm'
              onClick={() => moveToCart(encodedToken, wishlist)}>
              MOVE TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistCard;
