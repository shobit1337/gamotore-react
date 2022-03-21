import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/auth-context';

const AuthRoute = () => {
  const { user } = useAuth();

  return user.userDetails ? <Navigate to={'/'} /> : <Outlet />;
};

export default AuthRoute;
