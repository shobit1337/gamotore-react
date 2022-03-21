import { REQUEST_AUTH, LOGIN, AUTH_ERROR, LOGOUT } from './action.types';

let currentUser = localStorage.getItem('currentUser');

let userDetails = currentUser ? JSON.parse(currentUser).userDetails : '';
let encodedToken = currentUser ? JSON.parse(currentUser).encodedToken : '';

const initialState = {
  userDetails: '' || userDetails,
  encodedToken: '' || encodedToken,
  loading: false,
  errorMessage: null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case REQUEST_AUTH:
      return {
        ...initialState,
        loading: true,
      };
    case LOGIN:
      return {
        ...initialState,
        userDetails: action.payload.userDetails,
        encodedToken: action.payload.encodedToken,
        loading: false,
      };
    case LOGOUT:
      return {
        ...initialState,
        userDetails: '',
        encodedToken: '',
      };

    case AUTH_ERROR:
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export { authReducer, initialState };
