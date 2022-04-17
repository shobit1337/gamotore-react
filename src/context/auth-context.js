import { createContext, useContext, useReducer, useEffect } from 'react';
import { validateUser } from '../store/auth/actions';
import { authReducer, initialState } from '../store/auth/reducer';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, dispatchAuth] = useReducer(authReducer, initialState);

  const isLoggedIn = () => (user.userDetails ? true : false);

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    (async () => {
      if (authToken) {
        await validateUser(dispatchAuth, authToken);
      }
    })();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        dispatchAuth,
        isLoggedIn,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
