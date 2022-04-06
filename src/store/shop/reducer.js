import { SET_CART, SET_WISHLIST } from './action.types';
import { getCartInfo } from '../../utils/cart';

const initialState = {
  cart: {
    cartItems: [],
    totalQuantity: 0,
    totalPrice: 0,
    totalDiscount: 0,
  },
  wishlist: {
    wishlistItems: [],
  },
};

const shopReducer = (state, action) => {
  switch (action.type) {
    case SET_CART:
      return {
        ...state,
        cart: {
          ...state.cart,
          cartItems: [...action.payload.cartItems],
          ...getCartInfo([...action.payload.cartItems]),
        },
      };

    case SET_WISHLIST:
      return {
        ...state,
        wishlist: { wishlistItems: [...action.payload.wishlistItems] },
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export { shopReducer, initialState };
