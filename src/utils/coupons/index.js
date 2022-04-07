import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL;

export const getAllCoupons = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/coupons`);
    if (data.coupons) {
      return data.coupons;
    }
    return [];
  } catch (error) {
    throw new Error('Failed to get coupons.');
  }
};

export const applyCoupon = async (coupon) => {
  try {
    const { data } = await axios.post(`${API_URL}/coupon`, { coupon });
    if (data.coupons) {
      return true;
    }
    return false;
  } catch (error) {
    throw new Error('Failed to use coupon.');
  }
};
