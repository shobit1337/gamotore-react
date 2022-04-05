import React from 'react';
import { Link } from 'react-router-dom';
import { CartCard } from '../../components';
import { useAuth } from '../../context/auth-context';
import { useShop } from '../../context/shop-context';

const CartPage = () => {
  const {
    shop: {
      cart: { cartItems, totalPrice, totalQuantity, totalDiscount },
    },
    clearCart,
  } = useShop();

  const {
    user: { encodedToken },
  } = useAuth();
  return (
    <>
      <h4 className='cart-title border-top py-sm d-flex justify-between items-center gap-xs'>
        My Cart {`( ${totalQuantity} Items )`}
      </h4>

      {/* Cart Container */}
      <div className='product-container'>
        <div className='cart-page-details'>
          <div className='d-flex justify-between items-center'>
            <button
              className='text-sm btn btn-xs btn-outlined btn-rounded btn-light text-light d-flex flex-center gap-xs'
              onClick={() => clearCart(encodedToken)}>
              Empty Cart<i className='fab fa-dropbox'></i>
            </button>
            <button className='text-sm btn btn-xs btn-outlined btn-rounded btn-light text-light d-flex flex-center gap-xs'>
              SHARE CART<i className='fas fa-share-alt'></i>
            </button>
          </div>

          {/* Cart Items */}
          {cartItems.length
            ? cartItems.map((item) => <CartCard key={item._id} cart={item} />)
            : null}
        </div>

        {/* Product Summary */}
        <div className='cart-page-card'>
          <div className='text-lg'>Games and Apps Summary</div>
          <div className='cart-page-card-detail'>
            <span className='text-dark-light text-semibold'>Price</span>
            <span>₹{totalPrice}</span>
          </div>
          {totalDiscount > 0 ? (
            <div className='cart-page-card-detail'>
              <span className='text-dark-light text-semibold'>
                Sale Discount
              </span>
              <span>-₹{totalDiscount}</span>
            </div>
          ) : null}
          {totalPrice > 0 ? (
            <>
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
            </>
          ) : null}
          <div className='cart-page-card-detail border-top'>
            <span className='text-dark-light text-semibold'>Subtotal</span>
            <span>₹{(totalPrice - totalDiscount).toFixed(2)}</span>
          </div>
          {totalQuantity > 0 ? (
            <Link to='/checkout' className='btn'>
              CHECK OUT
            </Link>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default CartPage;
