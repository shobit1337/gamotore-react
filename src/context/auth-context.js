import { createContext, useContext, useReducer } from 'react';
import { authReducer, initialState } from '../store/auth/reducer';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, dispatchAuth] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ user, dispatchAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
