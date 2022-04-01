import axios from 'axios';
import React, { useContext, createContext, useState, useEffect } from 'react';
import { getCartInfo } from '../utils/cart';
import { useAuth } from './auth-context';

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
  totalDiscount: 0,
};

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const { user } = useAuth();

  const [cart, setCart] = useState({ ...initialState });

  // InitialiseCart
  const initialiseCart = async (token) => {
    if (token) {
      try {
        const { data } = await axios.get('/api/user/cart', {
          headers: { authorization: token },
        });
        if (data.cart) {
          setCart({
            cartItems: [...data.cart],
            ...getCartInfo([...data.cart]),
          });
          localStorage.setItem('cartItems', JSON.stringify(data.cart));
        }
      } catch (error) {
        throw new Error('Failed to Fetch Cart Details');
      }
    } else {
      const localCart = JSON.parse(localStorage.getItem('cartItems'));

      if (localCart) {
        setCart({
          cartItems: [...localCart],
          ...getCartInfo([...localCart]),
        });
      }
    }
  };

  // AddToCart
  const addToCart = async (token, product) => {
    try {
      const { data } = await axios.post(
        '/api/user/cart',
        { product },
        { headers: { authorization: token } }
      );
      if (data.cart) {
        setCart({
          cartItems: [...data.cart],
          ...getCartInfo([...data.cart]),
        });

        localStorage.setItem('cartItems', JSON.stringify(data.cart));
      }
    } catch (error) {
      throw new Error('Failed to Add Item to Cart.');
    }
  };

  // RemoveFromCart
  const removeFromCart = async (token, productId) => {
    try {
      const { data } = await axios.delete(`/api/user/cart/${productId}`, {
        headers: { authorization: token },
      });

      if (data.cart)
        setCart({
          cartItems: [...data.cart],
          ...getCartInfo([...data.cart]),
        });

      localStorage.setItem('cartItems', JSON.stringify(data.cart));
    } catch (error) {
      throw new Error('Failed to Update Cart Details');
    }
  };

  // Update Cart
  const updateCart = async (token, productId, action) => {
    try {
      const { data } = await axios.post(
        `/api/user/cart/${productId}`,
        {
          action: {
            type: action,
          },
        },
        { headers: { authorization: token } }
      );

      if (data.cart)
        setCart({
          cartItems: [...data.cart],
          ...getCartInfo([...data.cart]),
        });

      localStorage.setItem('cartItems', JSON.stringify(data.cart));
    } catch (error) {
      throw new Error('Failed to Update Cart Details');
    }
  };

  // Clear Cart
  const clearCart = async (token) => {
    try {
      const { data } = await axios.delete(
        '/api/user/cart/all',

        { headers: { authorization: token } }
      );
      if (data.cart) {
        setCart({
          cartItems: [...data.cart],
          ...getCartInfo([...data.cart]),
        });

        localStorage.setItem('cartItems', JSON.stringify(data.cart));
      }
    } catch (error) {
      throw new Error('Failed to Add Item to Cart.');
    }
  };

  useEffect(() => {
    initialiseCart(user.encodedToken);
  }, [user]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
