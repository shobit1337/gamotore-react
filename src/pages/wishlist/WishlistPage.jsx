import React from 'react';
import { WishlistCard } from '../../components';
import { useShop } from '../../context/shop-context';

const WishlistPage = () => {
  const {
    shop: {
      wishlist: { wishlistItems },
    },
  } = useShop();
  return (
    <>
      <h4 className='cart-title border-top py-sm'>
        My Wishlist {`(${wishlistItems.length} Items)`}
      </h4>

      {/* Cart Container */}
      <div className='product-container'>
        <div className='cart-page-details'>
          {!!wishlistItems.length ? (
            wishlistItems.map((wishlist) => (
              <WishlistCard key={wishlist._id} wishlist={wishlist} />
            ))
          ) : (
            <div>No Items in wishlist.</div>
          )}
        </div>
      </div>
    </>
  );
};

export default WishlistPage;
