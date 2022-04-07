import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useShop } from '../../../../context/shop-context';
import ApplyCoupon from '../ApplyCoupon/ApplyCoupon';
import './CartSummary.css';

const CartSummary = () => {
  const {
    shop: { cart },
  } = useShop();

  const [appliedCoupon, setAppliedCoupon] = useState({ name: '', discount: 0 });
  const [finalAmount, setFinalAmount] = useState(0);

  useEffect(() => {
    if (!appliedCoupon.name) {
      const totalBill = parseFloat(
        (cart.totalPrice - cart.totalDiscount).toFixed(2)
      );
      setFinalAmount(totalBill);
    } else {
      const totalBill = parseFloat(
        (cart.totalPrice - cart.totalDiscount).toFixed(2)
      );
      const totalBillAfterCoupon = parseFloat(
        (totalBill - (totalBill / 100) * appliedCoupon.discount).toFixed(2)
      );
      setFinalAmount(totalBillAfterCoupon);
    }
  }, [appliedCoupon, cart]);

  return (
    <div className='cart-page-card'>
      <div className='text-lg'>Games and Apps Summary</div>
      <div className='cart-page-card-detail'>
        <span className='text-dark-light text-semibold'>Price</span>
        <span>₹{cart.totalPrice}</span>
      </div>
      {cart.totalDiscount > 0 ? (
        <div className='cart-page-card-detail'>
          <span className='text-dark-light text-semibold'>Sale Discount</span>
          <span>-₹{cart.totalDiscount}</span>
        </div>
      ) : null}
      {cart.totalPrice > 0 ? (
        <>
          <div className='cart-page-card-detail'>
            <span className='text-dark-light text-semibold'>Coupon</span>
            {appliedCoupon.name ? (
              <span className='d-flex justify-between'>
                {appliedCoupon.name}{' '}
                <span
                  className='apply-btn'
                  onClick={() => setAppliedCoupon({ name: '', discount: 0 })}>
                  <i className='fas fa-trash-alt'></i>
                </span>
              </span>
            ) : (
              <ApplyCoupon
                appliedCoupon={appliedCoupon}
                setAppliedCoupon={setAppliedCoupon}
              />
            )}
          </div>

          <div className='cart-page-card-detail'>
            <span className='text-dark-light text-semibold'>Taxes</span>
            <span>Calculated at Checkout</span>
          </div>
        </>
      ) : null}
      <div className='cart-page-card-detail border-top'>
        <span className='text-dark-light text-semibold'>Subtotal</span>
        <span>₹{finalAmount}</span>
      </div>
      {cart.totalQuantity > 0 ? (
        <Link
          to='/checkout'
          state={{
            checkout: {
              price: cart.totalPrice,
              discount: cart.totalDiscount,
              couponDiscount: appliedCoupon.discount,
              finalAmount: finalAmount,
            },
          }}
          className='btn'>
          CHECK OUT
        </Link>
      ) : null}
    </div>
  );
};

export default CartSummary;
