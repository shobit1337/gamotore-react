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

const OrderSummary = ({ checkoutSummary, selectedAddress }) => {
  const navigate = useNavigate();
  const { clearCart } = useShop();
  const { price, discount, couponDiscount, finalAmount } = checkoutSummary;
  const [finalBillAmount, setFinalBillAmount] = useState(0);
  const [error, setError] = useState('');
  const {
    user: { userDetails },
  } = useAuth();

  const handleCheckout = () => {
    if (finalBillAmount > 0) {
      if (selectedAddress?._id) {
        setError('');
        displayRazorpay(finalBillAmount, userDetails, onSuccess);
      } else setError('Please Select an address.');
    } else {
      if (selectedAddress?._id) {
        setError('');
        onSuccess('not required for free orders');
      } else setError('Please Select an address.');
    }
  };

  function onSuccess(response) {
    const orderId = response.razorpay_payment_id || response;
    clearCart();
    navigate(`/order-success/${orderId}`, {
      state: { checkout: undefined },
      replace: true,
    });
  }

  useEffect(() => {
    setFinalBillAmount(
      parseFloat((finalAmount + getGSTAmount(finalAmount)).toFixed(2))
    );
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
      {error ? <span className='text-danger'>{error}</span> : null}
      {finalBillAmount > 0 ? (
        <button className='btn btn-secondary text-sm' onClick={handleCheckout}>
          Pay using Razorpay
        </button>
      ) : (
        <button className='btn btn-secondary text-sm' onClick={handleCheckout}>
          Confirm your order
        </button>
      )}
    </div>
  );
};

export default OrderSummary;
