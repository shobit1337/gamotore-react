import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth-context';
import { useShop } from '../../context/shop-context';
import { getDiscountedPrice } from '../../utils/products';

const CartCard = ({ cart }) => {
  const navigate = useNavigate();
  const { removeFromCart, updateCart, moveToWishlist } = useShop();
  const {
    user: { encodedToken },
  } = useAuth();
  return (
    <div className='cart-card'>
      <img
        src={cart.thumbnailImage}
        alt=''
        onClick={() => navigate(`/product/${cart._id}`)}
      />
      <div className='d-flex flex-column justify-between flex-grow'>
        <div className='d-flex justify-between gap-sm flex-wrap'>
          <div className='d-flex gap-xxxs flex-column'>
            <div className='badge'>BASE GAME</div>
            <div className='product-name'>{cart.title}</div>
          </div>

          <div className='d-flex gap-xxxs flex-column'>
            <div className='d-flex items-center flex-wrap gap-sm'>
              {cart.discount ? (
                <>
                  <span className='badge'>-{cart.discount}%</span>
                  <span className='mrp-price text-dark-lighter'>
                    ₹{cart.price}
                  </span>
                  <span className='current-price'>
                    ₹{getDiscountedPrice(cart.price, cart.discount)}
                  </span>
                </>
              ) : (
                <span className='current-price'>₹{cart.price}</span>
              )}
            </div>
            {cart.discount ? (
              <span> Sale ends 3/4/2022 at 4:30 AM </span>
            ) : null}
          </div>
        </div>

        <div className='d-flex justify-between items-end'>
          <span>
            {' '}
            {cart.platform.includes('windows') ? (
              <i className='fab fa-windows'></i>
            ) : null}
            {cart.platform.includes('mac') ? <span> MAC</span> : null}
          </span>
          <div className='d-flex flex-column items-end gap-xs'>
            <div className='d-flex items-center gap-sm'>
              <span>
                <i
                  className='fas fa-minus-circle  cursor-pointer'
                  onClick={() =>
                    updateCart(encodedToken, cart._id, 'decrement')
                  }></i>
              </span>
              <span>{cart.quantity}</span>
              <span>
                <i
                  className='fas fa-plus-circle  cursor-pointer'
                  onClick={() =>
                    updateCart(encodedToken, cart._id, 'increment')
                  }></i>
              </span>
            </div>
            <div className='d-flex items-center gap-sm flex-wrap justify-center cursor-pointer'>
              <span onClick={() => moveToWishlist(encodedToken, cart)}>
                Move to wishlish
              </span>
              <span
                className='cursor-pointer'
                onClick={() => removeFromCart(encodedToken, cart._id)}>
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
