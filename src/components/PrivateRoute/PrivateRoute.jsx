import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/auth-context';

const PrivateRoute = () => {
  const { user } = useAuth();

  return user.userDetails ? <Outlet /> : <Navigate replace to={'/login'} />;
};

export default PrivateRoute;
