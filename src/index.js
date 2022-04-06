import React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider } from './context/auth-context';
import { FiltersProvider } from './context/filter-context';
import { ShopProvider } from './context/shop-context';
import './index.css';
import Routes from './Routes';
import { makeServer } from './server';

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <FiltersProvider>
        <ShopProvider>
          <Routes />
        </ShopProvider>
      </FiltersProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
