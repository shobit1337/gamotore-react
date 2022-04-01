import { getDiscountedPrice } from '../products';

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
