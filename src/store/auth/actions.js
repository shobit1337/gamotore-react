import axios from 'axios';
import { REQUEST_AUTH, LOGIN, AUTH_ERROR, LOGOUT } from './action.types';

const API_URL = process.env.REACT_APP_API_URL;

export async function loginUser(dispatch, loginPayload) {
  const requestOptions = {
    method: 'POST',
    headers: {
      Accept: '*/*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginPayload),
  };

  try {
    dispatch({ type: REQUEST_AUTH });
    let response = await fetch(`${API_URL}/auth/login`, requestOptions);
    let data = await response.json();

    if (data.foundUser) {
      let payload = {
        userDetails: data.foundUser,
        encodedToken: data.encodedToken,
      };
      dispatch({ type: LOGIN, payload });
      localStorage.setItem('currentUser', JSON.stringify(payload));
      return data;
    }

    dispatch({ type: AUTH_ERROR, error: data.errors[0] });
    return;
  } catch (error) {
    dispatch({ type: AUTH_ERROR, error: error });
  }
}

export async function logout(dispatch) {
  dispatch({ type: LOGOUT });
  localStorage.removeItem('currentUser');
  localStorage.removeItem('cartItems');
  localStorage.removeItem('wishlistItems');
}

export async function signupUser(dispatch, loginPayload) {
  const requestOptions = {
    method: 'POST',
    headers: {
      Accept: '*/*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginPayload),
  };

  try {
    dispatch({ type: REQUEST_AUTH });
    let response = await fetch(`${API_URL}/auth/signup`, requestOptions);
    let data = response.json();

    if (data.createdUser) {
      let payload = {
        userDetails: data.createdUser,
        encodedToken: data.encodedToken,
      };
      dispatch({
        type: LOGIN,
        payload,
      });
      localStorage.setItem('currentUser', JSON.stringify(payload));
      return data;
    }

    dispatch({ type: AUTH_ERROR, error: data.errors[0] });
    return;
  } catch (error) {
    dispatch({ type: AUTH_ERROR, error: error });
  }
}

export const updateUser = async (dispatch, token, updatedUser) => {
  try {
    const { data } = await axios.post(`${API_URL}/auth/update`, updatedUser, {
      headers: { authorization: token },
    });
    if (data.updatedUser) {
      let payload = {
        userDetails: data.updatedUser,
        encodedToken: data.encodedToken,
      };
      dispatch({
        type: LOGIN,
        payload,
      });
      localStorage.setItem('currentUser', JSON.stringify(payload));
      return payload;
    }
  } catch (error) {
    throw new Error("Failed to update user's details. ", error);
  }
};
