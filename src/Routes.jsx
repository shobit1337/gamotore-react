import React from 'react';
import {
  BrowserRouter as Router,
  Routes as RoutesContainer,
  Route,
} from 'react-router-dom';

import App from './App';
import Mockman from 'mockman-js';

import {
  HomePage,
  BrowseProductPage,
  ProductPage,
  ProfilePage,
  WishlistPage,
  CartPage,
  CheckoutPage,
  ForgetPasswordPage,
  LoginPage,
  SignupPage,
  ShareCartPage,
  PageNotFound,
  OrderSuccessPage,
} from './pages';

import { PrivateRoute } from './components';

const Routes = () => {
  return (
    <Router>
      <RoutesContainer>
        <Route path='/' element={<App />}>
          <Route index element={<HomePage />} />
          <Route path='/browse' element={<BrowseProductPage />} />
          <Route path='/product/:productId' element={<ProductPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/cart/:cartId' element={<ShareCartPage />} />
          <Route path='/wishlist' element={<WishlistPage />} />

          <Route element={<PrivateRoute />}>
            <Route path='/checkout' element={<CheckoutPage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route
              path='/order-success/:orderId'
              element={<OrderSuccessPage />}
            />
          </Route>
          <Route path='*' element={<PageNotFound />} />
        </Route>
        <Route element={<PrivateRoute authRoute />}>
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/forgot-password' element={<ForgetPasswordPage />} />
        </Route>
        <Route path='/mockman' element={<Mockman />} />
      </RoutesContainer>
    </Router>
  );
};

export default Routes;
