import React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider } from './context/auth-context';
import './index.css';
import Routes from './Routes';
import { makeServer } from './server';

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
