import React from 'react';

const WishlistCard = () => {
  return (
    <div className='cart-card'>
      <img
        src='https://cdn1.epicgames.com/spt-assets/7b69aea9b3404faaa461911f99b6cbbc/download-henchman-story-offer-iq9jq.png?h=1280&resize=1&w=960'
        alt='wishlist-cover'
      />
      <div className='d-flex flex-column justify-between flex-grow'>
        <div className='d-flex justify-between'>
          <div className='d-flex gap-xxxs flex-column'>
            <div className='badge'>BASE GAME</div>
            <div className='product-name'>HENCHMAN STORY</div>
          </div>

          <div className='d-flex gap-xxxs flex-column'>
            <div className='d-flex items-center justify-between gap-sm'>
              <span className='badge'>-33%</span>
              <span className='mrp-price text-dark-lighter'>$349</span>
              <span className='current-price'>$233.83</span>
            </div>
            <span> Sale ends 3/4/2022 at 4:30 AM </span>
          </div>
        </div>

        <div className='d-flex justify-between items-center'>
          <i className='fab fa-windows'></i>
          <div className='d-flex items-center gap-sm'>
            <button className='link text-dark-lighter'>Remove</button>
            <button className='btn btn-outlined btn-rounded btn-light btn-sm'>
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistCard;
