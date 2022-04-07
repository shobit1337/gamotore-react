import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { AddressManagement, OrderSummary } from './components';
import { useState } from 'react';

const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [checkoutSummary, setCheckoutSummary] = useState({});
  useEffect(() => {
    if (location.state.checkout) {
      setCheckoutSummary({ ...location.state.checkout });
    } else {
      navigate('/cart', { replace: true });
    }
  }, [location, navigate]);
  return (
    <>
      <h4 className='cart-title border-top py-sm d-flex justify-between items-center gap-xs'>
        Checkout
      </h4>

      {/*Cart Container */}
      <div className='product-container'>
        <div className='cart-page-details'>
          <div className='d-flex justify-between items-center'>
            <span className='text-md text-light'>Address:</span>
            <button className='text-sm btn btn-xs btn-outlined btn-rounded btn-light text-light d-flex flex-center gap-xs'>
              <i className='far fa-plus-square'></i>ADD ADDRESS
            </button>
          </div>

          <AddressManagement />
        </div>

        <OrderSummary checkoutSummary={checkoutSummary} />
      </div>
    </>
  );
};

export default CheckoutPage;
