import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { PublicCartCard } from '../../components';
import { useAuth } from '../../context/auth-context';
import { useShop } from '../../context/shop-context';
import { getCartInfo, getPublicCart } from '../../utils/cart';

const ShareCartPage = () => {
  const { setCart } = useShop();

  const { cartId } = useParams();
  const navigate = useNavigate();
  const [publicCart, setPublicCart] = useState(null);

  useEffect(() => {
    (async () => {
      if (cartId) {
        const cart = await getPublicCart(cartId);
        if (cart) {
          setPublicCart({ cartItems: cart, ...getCartInfo(cart) });
        } else navigate('/');
      } else navigate('/');
    })();
  }, [cartId, navigate]);

  const {
    user: { encodedToken },
  } = useAuth();
  return !!publicCart?.cartItems.length ? (
    <>
      <h4 className='cart-title border-top pt-sm d-flex justify-between items-center gap-xs'>
        {`Shared by ${
          publicCart.sharedBy ? publicCart.sharedBy : 'Anonymous'
        } `}
        {`( ${publicCart.totalQuantity} Items )`}
      </h4>

      {/* Cart Container */}
      <div className='product-container'>
        <div className='cart-page-details'>
          <div className='d-flex justify-between items-center'>
            <button
              className='text-sm btn btn-xs btn-outlined btn-rounded btn-light text-light d-flex flex-center gap-xs'
              onClick={() => setCart(encodedToken, publicCart.cartItems)}>
              Save Cart<i className='fab fa-dropbox'></i>
            </button>
          </div>

          {/* Cart Items */}
          {publicCart.cartItems.length
            ? publicCart.cartItems.map((item) => (
                <PublicCartCard key={item._id} cart={item} />
              ))
            : null}
        </div>

        {/* Product Summary */}
        <div className='cart-page-card'>
          <div className='text-lg'>Games and Apps Summary</div>
          <div className='cart-page-card-detail'>
            <span className='text-dark-light text-semibold'>Price</span>
            <span>₹{publicCart.totalPrice}</span>
          </div>
          {publicCart.totalDiscount > 0 ? (
            <div className='cart-page-card-detail'>
              <span className='text-dark-light text-semibold'>
                Sale Discount
              </span>
              <span>-₹{publicCart.totalDiscount}</span>
            </div>
          ) : null}
          {publicCart.totalPrice > 0 ? (
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
            <span>
              ₹{(publicCart.totalPrice - publicCart.totalDiscount).toFixed(2)}
            </span>
          </div>
          {publicCart.totalQuantity > 0 ? (
            <Link to='/checkout' className='btn'>
              CHECK OUT
            </Link>
          ) : null}
        </div>
      </div>
    </>
  ) : null;
};

export default ShareCartPage;
