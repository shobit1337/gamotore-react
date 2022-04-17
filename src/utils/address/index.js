import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL;

export const addAddress = async (token, address) => {
  try {
    const { data } = await axios.post(
      `${API_URL}/user/address`,
      { address },
      { headers: { authorization: token } }
    );
    if (data?.address) {
      return data.address;
    }
  } catch (err) {
    throw new Error('Failed to Add Address');
  }
};

export const getAllAddress = async (token) => {
  try {
    const { data } = await axios.get(`${API_URL}/user/address`, {
      headers: { authorization: token },
    });
    if (data?.address) {
      return data.address;
    }
  } catch (err) {
    throw new Error('Failed to Get All Address');
  }
};

export const deleteAddress = async (token, addressId) => {
  try {
    const { data } = await axios.delete(
      `${API_URL}/user/address/${addressId}`,
      { headers: { authorization: token } }
    );
    if (data?.address) {
      return data.address;
    }
  } catch (err) {
    throw new Error('Failed to Delete Address');
  }
};
