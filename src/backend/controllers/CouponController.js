import { Response } from 'miragejs';

// Get All Coupons
export const getAllCouponsHandler = function (schema, request) {
  try {
    return new Response(200, {}, { coupons: this.db.coupons });
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

// Apply Coupon and Update the data
export const useCouponHandler = function (schema, request) {
  const { coupon } = JSON.parse(request.requestBody);
  try {
    const foundCoupon = this.db.coupons.findBy({ coupon: coupon });

    if (foundCoupon) {
      this.db.coupons.update(
        { coupon: coupon },
        {
          useLimit: foundCoupon.useLimit - 1,
        }
      );
      return new Response(201, {}, { coupons: this.db.coupons });
    }
    return new Response(
      401,
      {},
      { errors: ['Coupon not found. Invialid CouponId.'] }
    );
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
