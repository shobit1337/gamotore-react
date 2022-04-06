import axios from 'axios';
import { getDiscountedPrice } from '../products';

export const getFromLocal = (name) => {
  return localStorage.getItem(name)
    ? JSON.parse(localStorage.getItem(name))
    : [];
};

export const setToLocal = (name, data) => {
  localStorage.setItem(name, JSON.stringify(data));
};

export const getCartInfo = (cart) => {
  return cart.reduce(
    (acc, curr) => {
      let totalQuantity = acc.totalQuantity;
      let totalPrice = acc.totalPrice;
      let totalDiscount = acc.totalDiscount;

      if (curr.quantity > 1) {
        totalQuantity += curr.quantity;
        totalPrice += curr.price * curr.quantity;
        totalDiscount += parseFloat(
          (
            (curr.price - getDiscountedPrice(curr.price, curr.discount)) *
            curr.quantity
          ).toFixed(2)
        );
      } else {
        totalQuantity += 1;
        totalPrice += curr.price;
        totalDiscount += parseFloat(
          (curr.price - getDiscountedPrice(curr.price, curr.discount)).toFixed(
            2
          )
        );
      }

      return {
        totalQuantity,
        totalPrice,
        totalDiscount,
      };
    },
    { totalQuantity: 0, totalPrice: 0, totalDiscount: 0 }
  );
};

export const getTotalDiscount = (cart) => {
  return cart.reduce(
    (acc, curr) =>
      acc + (curr.price - getDiscountedPrice(curr.price, curr.discount)),
    0
  );
};

export const removeDuplicateProducts = (productList) => {
  const hash = {};
  // Saving Unique Values into hash,
  productList.forEach((product) => {
    if (!hash[product.id]) {
      hash[product.id] = product;
    } else {
      if (product.quantity > hash[product.id].quantity) {
        hash[product.id] = product;
      }
    }
  });

  return Object.values(hash);
};
export const filterDuplicates = (productList) => {
  const hash = {};
  // Returning filtered products using hash,
  return productList.filter((product) => {
    if (!hash[product.id]) {
      hash[product.id] = true;
      return true;
    }
    return false;
  });
};

// Share Pulic Cart:
export const getPublicCart = async (cartId) => {
  try {
    const { data } = await axios.get(`/api/cart/${cartId}`);
    if (data.cart) {
      return data.cart.cartItems;
    }
  } catch (error) {
    throw new Error('Failed to get public cart.');
  }
};

// Create Public Cart:
export const createPublicCart = async (cart) => {
  try {
    const { data } = await axios.post(`/api/cart`, { cart });
    if (data.cart) {
      return data.cart;
    }
  } catch (error) {
    throw new Error('Failed to create public cart.');
  }
};
