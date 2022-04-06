import { Response } from 'miragejs';
import { nanoid } from 'nanoid';

import { formatDate } from '../utils/authUtils';

// Share Cart
export const getPublicCartHandler = function (schema, request) {
  const cartId = request.params.cartId;
  try {
    const cart = schema.publicCarts.findBy({ _id: cartId });
    if (cart) {
      return new Response(200, {}, { cart });
    }
    return new Response(
      404,
      {},
      {
        errors: ['The cart you requested is not valid. Not Found error'],
      }
    );
  } catch (error) {
    new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

export const createPublicCartHandler = function (schema, request) {
  const { cart } = JSON.parse(request.requestBody);
  try {
    // check if email already exists
    const _id = nanoid(10);
    const newCart = {
      cartItems: cart,
      _id,
      createdAt: formatDate(),
    };
    schema.publicCarts.create(newCart);
    return new Response(201, {}, { cart: newCart });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};
