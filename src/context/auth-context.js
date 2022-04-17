import {
  createContext,
  useState,
  useContext,
  useReducer,
  useEffect,
} from 'react';
import { validateUser } from '../store/auth/actions';
import { authReducer, initialState } from '../store/auth/reducer';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, dispatchAuth] = useReducer(authReducer, initialState);
  const [isValidating, setIsValidating] = useState(true);

  const isLoggedIn = () => (user.userDetails ? true : false);

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    (async () => {
      setIsValidating(true);
      if (authToken) {
        await validateUser(dispatchAuth, authToken);
      }
      setIsValidating(false);
    })();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        dispatchAuth,
        isLoggedIn,
      }}>
      {!isValidating ? children : null}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
