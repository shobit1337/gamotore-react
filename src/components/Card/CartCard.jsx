import React from 'react';
import { useAuth } from '../../context/auth-context';
import { useCart } from '../../context/cart-context';
import { getDiscountedPrice } from '../../utils/products';

const CartCard = ({
  cart: { _id, title, discount, price, platform, thumbnailImage, quantity },
}) => {
  const { removeFromCart, updateCart } = useCart();
  const {
    user: { encodedToken },
  } = useAuth();
  return (
    <div className='cart-card flex-wrap'>
      <img src={thumbnailImage} alt='' />
      <div className='d-flex flex-column justify-between flex-grow'>
        <div className='d-flex justify-between flex-wrap'>
          <div className='d-flex gap-xxxs flex-column'>
            <div className='badge'>BASE GAME</div>
            <div className='product-name'>{title}</div>
          </div>

          <div className='d-flex gap-xxxs flex-column'>
            <div className='d-flex items-center justify-between gap-sm'>
              {discount ? (
                <>
                  <span className='badge'>-{discount}%</span>
                  <span className='mrp-price text-dark-lighter'>₹{price}</span>
                  <span className='current-price'>
                    ₹{getDiscountedPrice(price, discount)}
                  </span>
                </>
              ) : (
                <span className='current-price'>₹{price}</span>
              )}
            </div>
            <span> Sale ends 3/4/2022 at 4:30 AM </span>
          </div>
        </div>

        <div className='d-flex justify-between items-end'>
          <span>
            {' '}
            {platform.includes('windows') ? (
              <i className='fab fa-windows'></i>
            ) : null}
            {platform.includes('mac') ? <span> MAC</span> : null}
          </span>
          <div className='d-flex flex-column items-end gap-xs'>
            <div className='d-flex items-center gap-sm'>
              <span>
                <i
                  className='fas fa-minus-circle'
                  onClick={() =>
                    updateCart(encodedToken, _id, 'decrement')
                  }></i>
              </span>
              <span>{quantity}</span>
              <span>
                <i
                  className='fas fa-plus-circle'
                  onClick={() =>
                    updateCart(encodedToken, _id, 'increment')
                  }></i>
              </span>
            </div>
            <div className='d-flex items-center gap-sm'>
              <span>Move to wishlish</span>
              <span
                className='cursor-pointer'
                onClick={() => removeFromCart(encodedToken, _id)}>
                Remove
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
