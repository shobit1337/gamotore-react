import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/auth-context';

const PrivateRoute = ({ authRoute = false }) => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  if (authRoute) {
    return isLoggedIn() ? <Navigate replace to={'/'} /> : <Outlet />;
  }

  return isLoggedIn() ? (
    <Outlet />
  ) : (
    <Navigate replace to={'/login'} state={{ from: location }} />
  );
};

export default PrivateRoute;
