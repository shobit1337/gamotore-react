import React, { useState } from 'react';
import { Modal } from '../../../../components';
import { applyCoupon, getAllCoupons } from '../../../../utils/coupons';

const ApplyCoupon = ({ appliedCoupon, setAppliedCoupon }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [coupons, setCoupons] = useState([]);
  const [error, setError] = useState('');

  const handleShowCoupons = async () => {
    const data = await getAllCoupons();
    setIsModalOpen(true);
    setCoupons(data);
  };

  const handleAddCoupon = async (coupon) => {
    const isCouponApplied = await applyCoupon(coupon.coupon);
    if (isCouponApplied) {
      setAppliedCoupon({ name: coupon.coupon, discount: coupon.discount });
    } else {
      setError('Coupon is not valid.');
    }
  };

  return (
    <>
      <div className='input-field-group'>
        <input
          type='text'
          className='coupon-input'
          value={appliedCoupon.name}
          readOnly
        />

        <span className='apply-btn' onClick={handleShowCoupons}>
          View
        </span>
      </div>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <div className='coupons-container'>
            <h5> Available Coupons: </h5>
            {!!coupons.length ? (
              <div className='d-flex flex-column'>
                {coupons.map((coupon) => (
                  <span className='coupon' key={coupon._id}>
                    <div>
                      {coupon.coupon}{' '}
                      <div className='coupon-description'>
                        Get {coupon.discount}% OFF. TnC apply.
                      </div>
                    </div>
                    <span
                      className='apply-btn'
                      onClick={() => handleAddCoupon(coupon)}>
                      {' '}
                      APPLY
                    </span>
                  </span>
                ))}
              </div>
            ) : (
              <div>No Coupon available.</div>
            )}
            <div className='text-danger'>{error}</div>
          </div>
        </Modal>
      )}
    </>
  );
};
export default ApplyCoupon;
