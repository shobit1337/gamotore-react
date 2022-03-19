import React from "react";
import WishlistCard from "../../components/Card/WishlistCard";

const WishlistPage = () => {
  return (
    <>
      <h4 className="cart-title border-top py-sm">My Wishlist</h4>

      {/* Cart Container */}
      <div className="product-container">
        <div className="cart-page-details">
          <WishlistCard />
          <WishlistCard />
        </div>
      </div>
    </>
  );
};

export default WishlistPage;
