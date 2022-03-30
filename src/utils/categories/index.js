import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL;

export const getAllCategories = async () => {
  const { data } = await axios.get(`${API_URL}/categories`);
  if (data.categories) {
    return data.categories;
  }
  return [];
};

export const getCategory = async (categoryId) => {
  const { data } = await axios.get(`${API_URL}/categories/${categoryId}`);
  if (data.category) {
    return data.category;
  }
  return null;
};
