import axios from 'axios';
import { formatDate } from '../../backend/utils/authUtils';
import {
  filterDuplicates,
  getFromLocal,
  removeDuplicateProducts,
  setToLocal,
} from '../../utils/cart';
import { SET_CART, SET_WISHLIST } from './action.types';

// CART ACTION:
// Set Cart
export const setCart = (dispatch) => async (token, cartItems) => {
  try {
    let newCart = [...cartItems];
    if (token) {
      const {
        data: { cart },
      } = await axios.post(
        '/api/user/cart/update',
        { products: newCart },
        { headers: { authorization: token } }
      );
      newCart = [...cart];
    }
    setToLocal('cartItems', newCart);
    dispatch({ type: SET_CART, payload: { cartItems: newCart } });
    return newCart;
  } catch (error) {
    throw new Error('Failed to Add Item to Cart.');
  }
};

// Get Cart
export const getCart = (dispatch) => async (token) => {
  try {
    let newCart = getFromLocal('cartItems');
    if (token) {
      const { data } = await axios.get('/api/user/cart', {
        headers: { authorization: token },
      });
      if (data.cart) {
        if (newCart.length > 0) {
          newCart = removeDuplicateProducts([...data.cart, ...newCart]);
          // Updating New Cart to DB
          const {
            data: { cart },
          } = await axios.post(
            '/api/user/cart/update',
            { products: newCart },
            { headers: { authorization: token } }
          );
          newCart = [...cart];
        } else newCart = [...data.cart];
      }
    } else {
      newCart = getFromLocal('cartItems');
    }
    setToLocal('cartItems', newCart);
    dispatch({ type: SET_CART, payload: { cartItems: newCart } });
    return newCart;
  } catch (error) {
    throw new Error('Failed to Add Item to Cart.');
  }
};

// AddToCart
export const addToCart = (dispatch) => async (token, product) => {
  try {
    let newCart = [];
    if (token) {
      const { data } = await axios.post(
        '/api/user/cart',
        { product },
        { headers: { authorization: token } }
      );
      if (data.cart) {
        newCart = [...data.cart];
      }
    } else {
      // Handing Data when user is not signed in
      newCart = getFromLocal('cartItems');
      if (newCart.some((item) => item._id === product._id)) {
        newCart.forEach((item) => {
          if (item._id === product._id) {
            item.quantity += 1;
            item.updatedAt = formatDate();
          }
        });
      } else {
        newCart.push({
          ...product,
          createdAt: formatDate(),
          updatedAt: formatDate(),
          quantity: 1,
        });
      }
    }
    setToLocal('cartItems', newCart);
    dispatch({ type: SET_CART, payload: { cartItems: newCart } });
    return newCart;
  } catch (error) {
    throw new Error('Failed to Add Item to Cart.');
  }
};

// RemoveFromCart
export const removeFromCart = (dispatch) => async (token, productId) => {
  // Let Data
  try {
    let newCart = [];
    if (token) {
      const { data } = await axios.delete(`/api/user/cart/${productId}`, {
        headers: { authorization: token },
      });
      if (data.cart) newCart = [...data.cart];
    } else {
      // Handing Data when user is not signed in
      newCart = getFromLocal('cartItems');
      newCart = newCart.filter((item) => item._id !== productId);
    }
    setToLocal('cartItems', newCart);
    dispatch({ type: SET_CART, payload: { cartItems: newCart } });
    return newCart;
  } catch (error) {
    throw new Error('Failed to remove item from cart.');
  }
};

// Update Cart
export const updateCart = (dispatch) => async (token, productId, action) => {
  // Let Data
  try {
    let newCart = [];
    if (token) {
      const { data } = await axios.post(
        `/api/user/cart/${productId}`,
        {
          action: {
            type: action,
          },
        },
        { headers: { authorization: token } }
      );
      if (data.cart) {
        newCart = [...data.cart];
      }
    } else {
      // Handing Data when user is not signed in
      newCart = getFromLocal('cartItems');
      if (action === 'increment') {
        newCart.forEach((product) => {
          if (product._id === productId) {
            product.quantity += 1;
            product.updatedAt = formatDate();
          }
        });
      } else if (action === 'decrement') {
        newCart.forEach((product, index, object) => {
          if (product._id === productId) {
            if (product.quantity > 1) {
              product.quantity -= 1;
              product.updatedAt = formatDate();
            } else {
              object.splice(index, 1);
            }
          }
        });
      }
    }
    setToLocal('cartItems', newCart);
    dispatch({ type: SET_CART, payload: { cartItems: newCart } });
    return newCart;
  } catch (error) {
    throw new Error('Failed to Update Cart Details.');
  }
};

// Clear Cart
export const clearCart = (dispatch) => async (token) => {
  try {
    let newCart = [];
    if (token) {
      const { data } = await axios.delete(
        '/api/user/cart/all',

        { headers: { authorization: token } }
      );
      if (data.cart) {
        newCart = [...data.cart];
      }
    } else {
      // Handing Data when user is not signed in
      newCart = [];
    }
    setToLocal('cartItems', newCart);
    dispatch({ type: SET_CART, payload: { cartItems: newCart } });
    return newCart;
  } catch (error) {
    throw new Error('Failed to Add Item to Cart.');
  }
};

// WISHLIST ACTION:
// Get Wishlist
export const getWishlist = (dispatch) => async (token) => {
  try {
    let newWishlist = getFromLocal('wishlistItems');
    if (token) {
      const { data } = await axios.get('/api/user/wishlist', {
        headers: { authorization: token },
      });
      if (data.wishlist) {
        if (newWishlist.length > 0) {
          newWishlist = filterDuplicates([...data.wishlist, ...newWishlist]);
          // Updating New Wishlist to DB
          const {
            data: { wishlist },
          } = await axios.post(
            '/api/user/wishlist/update',
            { products: newWishlist },
            { headers: { authorization: token } }
          );
          newWishlist = [...wishlist];
        } else newWishlist = [...data.wishlist];
      }
    } else {
      newWishlist = getFromLocal('wishlistItems');
    }
    setToLocal('wishlistItems', newWishlist);
    dispatch({ type: SET_WISHLIST, payload: { wishlistItems: newWishlist } });
    return newWishlist;
  } catch (error) {
    throw new Error('Failed to get wishlist items.');
  }
};

// Add To Wishlist
export const addToWishlist = (dispatch) => async (token, product) => {
  try {
    let newWishlist = [];
    if (token) {
      const { data } = await axios.post(
        '/api/user/wishlist',
        { product },
        { headers: { authorization: token } }
      );
      if (data.wishlist) {
        newWishlist = [...data.wishlist];
      }
    } else {
      // Handing Data when user is not signed in
      newWishlist = getFromLocal('wishlistItems');
      if (!newWishlist.some((item) => item._id === product._id)) {
        newWishlist.push({
          ...product,
          createdAt: formatDate(),
          updatedAt: formatDate(),
        });
      }
    }
    setToLocal('wishlistItems', newWishlist);
    dispatch({ type: SET_WISHLIST, payload: { wishlistItems: newWishlist } });
    return newWishlist;
  } catch (error) {
    throw new Error('Failed to Add Item to Wishlist.');
  }
};

// Remove From Wishlist
export const removeFromWishlist = (dispatch) => async (token, productId) => {
  try {
    let newWishlist = [];
    if (token) {
      const { data } = await axios.post(`/api/user/wishlist/${productId}`, {
        headers: { authorization: token },
      });
      if (data.wishlist) {
        newWishlist = [...data.wishlist];
      }
    } else {
      // Handing Data when user is not signed in
      newWishlist = getFromLocal('wishlistItems');
      newWishlist = newWishlist.filter((item) => item._id !== productId);
    }
    setToLocal('wishlistItems', newWishlist);
    dispatch({ type: SET_WISHLIST, payload: { wishlistItems: newWishlist } });
    return newWishlist;
  } catch (error) {
    throw new Error('Failed to remove item from Wishlist.');
  }
};

export const moveToCart = (dispatch) => async (token, product) => {
  try {
    await addToCart(dispatch)(token, product);
    await removeFromWishlist(dispatch)(token, product._id);
  } catch (error) {
    throw new Error('Failed to move item to cart.');
  }
};

export const moveToWishlist = (dispatch) => async (token, product) => {
  try {
    await addToWishlist(dispatch)(token, product);
    await removeFromCart(dispatch)(token, product._id);
  } catch (error) {
    throw new Error('Failed to move item to cart.');
  }
};

// Initialize Shop
export const initializeShop = async (dispatch, token) => {
  try {
    const cart = await getCart(dispatch)(token);
    const wishlist = await getWishlist(dispatch)(token);
    return { cart: { cartItems: cart }, wishlist: { wishlistItems: wishlist } };
  } catch (error) {
    throw new Error('Failed to get wishlist and cart.');
  }
};
