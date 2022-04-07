import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../context/auth-context';
import { useShop } from '../../../../context/shop-context';
import {
  displayRazorpay,
  getDiscountAmount,
  getGSTAmount,
} from '../../../../utils/checkout';

const OrderSummary = ({ checkoutSummary }) => {
  const navigate = useNavigate();
  const { clearCart } = useShop();
  const { price, discount, couponDiscount, finalAmount } = checkoutSummary;
  const [finalBillAmount, setFinalBillAmount] = useState(0);
  const {
    user: { userDetails },
  } = useAuth();

  function onSuccess(response) {
    const orderId = response.razorpay_payment_id || response;
    clearCart();
    navigate(`/order-success/${orderId}`, {
      state: { checkout: undefined },
      replace: true,
    });
  }

  useEffect(() => {
    setFinalBillAmount(finalAmount - getGSTAmount(finalAmount));
  }, [finalAmount]);

  return (
    <div className='cart-page-card'>
      <div className='text-lg'>Order Summary</div>
      <div className='cart-page-card-detail'>
        <span className='text-dark-light text-semibold'>Price</span>
        <span>₹{price}</span>
      </div>
      <div className='cart-page-card-detail'>
        <span className='text-dark-light text-semibold'>Sale Discount</span>
        <span>-₹{discount}</span>
      </div>
      <div className='cart-page-card-detail'>
        <span className='text-dark-light text-semibold'>Coupon Discount</span>
        <span>
          <span className='text-dark-lighter'>({couponDiscount}%)</span> -₹
          {getDiscountAmount(price - discount, couponDiscount)}
        </span>
      </div>
      <div className='cart-page-card-detail'>
        <span className='text-dark-light text-semibold'>Taxes</span>
        <span>
          <span className='text-dark-lighter'>(18% GST)</span> ₹
          {getGSTAmount(finalAmount)}
        </span>
      </div>
      <div className='cart-page-card-detail border-top'>
        <span className='text-dark-light text-semibold'>Final Amount</span>
        <span>₹{finalBillAmount}</span>
      </div>
      {/* <button className='btn text-sm'>Pay With Card</button> */}
      {finalBillAmount > 0 ? (
        <button
          className='btn btn-secondary text-sm'
          onClick={() =>
            displayRazorpay(finalBillAmount, userDetails, onSuccess)
          }>
          Pay using Razorpay
        </button>
      ) : (
        <button
          className='btn btn-secondary text-sm'
          onClick={() => onSuccess('not required for free orders')}>
          Confirm your order
        </button>
      )}
    </div>
  );
};

export default OrderSummary;
