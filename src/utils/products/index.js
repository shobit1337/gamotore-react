import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL;

export const getAllProducts = async () => {
  const { data } = await axios.get(`${API_URL}/products`);
  if (data.products) {
    return data.products;
  }
  return [];
};

export const getProduct = async (productId) => {
  const { data } = await axios.get(`${API_URL}/products/${productId}`);
  if (data.product) {
    return data.product;
  }
  return null;
};
