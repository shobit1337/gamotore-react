import React from 'react';
import { useParams } from 'react-router-dom';
import ThankYou from '../../assets/thank-you.svg';

const OrderSuccessPage = () => {
  const { orderId } = useParams();
  return (
    <div className='d-flex flex-column flex-center p-md'>
      <span className='text-lg my-sm'>Your order has been received!</span>
      <span className='text-sm'>
        You will receive your game key on your email.
      </span>
      <span className='text-xs text-dark-lighter'>Order ID: {orderId}</span>
      <img src={ThankYou} alt='thank-you' style={{ maxHeight: '60vh' }} />
    </div>
  );
};

export default OrderSuccessPage;
