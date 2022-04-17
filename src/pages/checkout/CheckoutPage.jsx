import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { AddressManagement, OrderSummary } from './components';
import { useState } from 'react';

const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedAddress, setSelectedAddress] = useState(null);
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
          <AddressManagement setSelectedAddress={setSelectedAddress} />
        </div>

        <OrderSummary
          checkoutSummary={checkoutSummary}
          selectedAddress={selectedAddress}
        />
      </div>
    </>
  );
};

export default CheckoutPage;
