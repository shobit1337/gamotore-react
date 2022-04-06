import React, { useContext, createContext, useEffect, useReducer } from 'react';
import {
  addToCart,
  addToWishlist,
  clearCart,
  getCart,
  getWishlist,
  initializeShop,
  moveToCart,
  moveToWishlist,
  removeFromCart,
  removeFromWishlist,
  updateCart,
} from '../store/shop/actions';
import { shopReducer, initialState } from '../store/shop/reducer';
import { useAuth } from './auth-context';

const ShopContext = createContext();

const ShopProvider = ({ children }) => {
  const { user } = useAuth();

  const [shop, dispatchShop] = useReducer(shopReducer, initialState);

  useEffect(() => {
    initializeShop(dispatchShop, user.encodedToken);
  }, [user]);

  return (
    <ShopContext.Provider
      value={{
        shop,
        getCart: getCart(dispatchShop),
        addToCart: addToCart(dispatchShop),
        removeFromCart: removeFromCart(dispatchShop),
        updateCart: updateCart(dispatchShop),
        clearCart: clearCart(dispatchShop),
        getWishlist: getWishlist(dispatchShop),
        addToWishlist: addToWishlist(dispatchShop),
        removeFromWishlist: removeFromWishlist(dispatchShop),
        moveToCart: moveToCart(dispatchShop),
        moveToWishlist: moveToWishlist(dispatchShop),
      }}>
      {children}
    </ShopContext.Provider>
  );
};

const useShop = () => useContext(ShopContext);

export { useShop, ShopProvider };
