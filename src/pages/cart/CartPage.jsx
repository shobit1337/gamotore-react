import React from 'react';
import { Link } from 'react-router-dom';
import { CartCard } from '../../components';

const CartPage = () => {
  return (
    <>
      <h4 className='cart-title border-top py-sm d-flex justify-between items-center gap-xs'>
        My Cart
      </h4>

      {/* Cart Container */}
      <div className='product-container'>
        <div className='cart-page-details'>
          <div className='d-flex justify-between items-center'>
            <button className='text-sm btn btn-xs btn-outlined btn-rounded btn-light text-light d-flex flex-center gap-xs'>
              Empty Cart<i className='fab fa-dropbox'></i>
            </button>
            <button className='text-sm btn btn-xs btn-outlined btn-rounded btn-light text-light d-flex flex-center gap-xs'>
              SHARE CART<i className='fas fa-share-alt'></i>
            </button>
          </div>

          {/* Cart Items */}
          <CartCard />
          <CartCard />
        </div>

        {/* Product Summary */}
        <div className='cart-page-card'>
          <div className='text-lg'>Games and Apps Summary</div>
          <div className='cart-page-card-detail'>
            <span className='text-dark-light text-semibold'>Price</span>
            <span>₹3,348.00</span>
          </div>
          <div className='cart-page-card-detail'>
            <span className='text-dark-light text-semibold'>Sale Discount</span>
            <span>-₹115.17</span>
          </div>
          <div className='cart-page-card-detail'>
            <span className='text-dark-light text-semibold'>Coupon</span>
            <div className='input-field-group'>
              <input
                type='text'
                className='coupon-input'
                placeholder='Enter coupon'
              />
              <button className='add-coupon text-primary text-xs link'>
                ADD
              </button>
            </div>
          </div>
          <div className='cart-page-card-detail'>
            <span className='text-dark-light text-semibold'>Taxes</span>
            <span>Calculated at Checkout</span>
          </div>
          <div className='cart-page-card-detail border-top'>
            <span className='text-dark-light text-semibold'>Subtotal</span>
            <span>₹3,232.83</span>
          </div>
          <Link to='/checkout' className='btn'>
            CHECK OUT
          </Link>
        </div>
      </div>
    </>
  );
};

export default CartPage;
