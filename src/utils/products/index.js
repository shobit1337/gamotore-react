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

export const getDiscountedPrice = (price, discount) =>
  discount > 0 ? parseFloat(((price * discount) / 100).toFixed(2)) : price;

export const getPaginatedProducts = (products, page, limit) => {
  console.log('Data reveied to paginate: ', products);
  page = Number(page);
  limit = Number(limit);

  const startIndex = limit * (page - 1);
  const endIndex = limit * page;

  const totalPages = Math.ceil(products.length / limit);
  const nextPage = page + 1 <= totalPages ? page + 1 : 1;

  return {
    list: products.slice(startIndex, endIndex),
    info: {
      nextPage,
      startIndex,
      endIndex,
      totalProducts: products.length,
      totalPages,
    },
  };
};
