import axios from 'axios';
import { REQUEST_AUTH, LOGIN, AUTH_ERROR, LOGOUT } from './action.types';

const API_URL = process.env.REACT_APP_API_URL;

export const validateUser = async (dispatch, token) => {
  try {
    dispatch({ type: REQUEST_AUTH });
    const { data } = await axios.get(`${API_URL}/auth/validate`, {
      headers: { authorization: token },
    });

    if (data.foundUser) {
      const payload = {
        userDetails: data.foundUser,
        encodedToken: data.encodedToken,
      };
      dispatch({ type: LOGIN, payload });
      localStorage.setItem('authToken', data.encodedToken);
      return payload;
    }

    dispatch({ type: AUTH_ERROR, error: data.errors[0] });
    return;
  } catch (error) {
    localStorage.removeItem('authToken');
    dispatch({ type: AUTH_ERROR, error: error });
  }
};

export const loginUser = async (dispatch, loginPayload) => {
  try {
    dispatch({ type: REQUEST_AUTH });
    const { data } = await axios.post(`${API_URL}/auth/login`, {
      ...loginPayload,
    });

    if (data.foundUser) {
      const payload = {
        userDetails: data.foundUser,
        encodedToken: data.encodedToken,
      };
      dispatch({ type: LOGIN, payload });
      localStorage.setItem('authToken', data.encodedToken);
      return payload;
    }

    dispatch({ type: AUTH_ERROR, error: data.errors[0] });
    return;
  } catch (error) {
    dispatch({ type: AUTH_ERROR, error: error });
  }
};

export const logout = async (dispatch) => {
  dispatch({ type: LOGOUT });
  localStorage.removeItem('authToken');
  localStorage.removeItem('cartItems');
  localStorage.removeItem('wishlistItems');
};

export const signupUser = async (dispatch, signupPayload) => {
  try {
    dispatch({ type: REQUEST_AUTH });
    const { data } = await axios.post(`${API_URL}/auth/signup`, {
      ...signupPayload,
    });

    if (data.createdUser) {
      const payload = {
        userDetails: data.createdUser,
        encodedToken: data.encodedToken,
      };
      dispatch({
        type: LOGIN,
        payload,
      });
      localStorage.setItem('authToken', data.encodedToken);
      return data;
    }

    dispatch({ type: AUTH_ERROR, error: data.errors[0] });
    return;
  } catch (error) {
    dispatch({ type: AUTH_ERROR, error: error });
  }
};

export const updateUser = async (dispatch, token, updatedUser) => {
  try {
    const { data } = await axios.post(`${API_URL}/auth/update`, updatedUser, {
      headers: { authorization: token },
    });
    if (data.updatedUser) {
      const payload = {
        userDetails: data.updatedUser,
        encodedToken: data.encodedToken,
      };
      dispatch({
        type: LOGIN,
        payload,
      });
      localStorage.setItem('authToken', data.encodedToken);
      return payload;
    }
  } catch (error) {
    throw new Error("Failed to update user's details. ", error);
  }
};
