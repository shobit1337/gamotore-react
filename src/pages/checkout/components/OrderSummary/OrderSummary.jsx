import React from 'react';

const OrderSummary = () => {
  return (
    <div className='cart-page-card'>
      <div className='text-lg'>Order Summary</div>
      <div className='cart-page-card-detail'>
        <span className='text-dark-light text-semibold'>Price</span>
        <span>₹3,348.00</span>
      </div>
      <div className='cart-page-card-detail'>
        <span className='text-dark-light text-semibold'>Sale Discount</span>
        <span>-₹115.17</span>
      </div>
      <div className='cart-page-card-detail'>
        <span className='text-dark-light text-semibold'>Coupon Discount</span>
        <span>
          <span className='text-dark-lighter'>(10%)</span> -₹300.17
        </span>
      </div>
      <div className='cart-page-card-detail'>
        <span className='text-dark-light text-semibold'>Taxes</span>
        <span>
          <span className='text-dark-lighter'>(18% GST)</span> ₹695
        </span>
      </div>
      <div className='cart-page-card-detail border-top'>
        <span className='text-dark-light text-semibold'>Final Amount</span>
        <span>₹3,232.83</span>
      </div>
      <button className='btn text-sm'>Pay With Card</button>
      <button className='btn btn-secondary text-sm'>Pay using Razorpay</button>
    </div>
  );
};

export default OrderSummary;
