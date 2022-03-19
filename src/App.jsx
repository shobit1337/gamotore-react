import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar, Footer, Header } from './components';

const App = () => {
  return (
    <div className='bg-dark text-light'>
      <Header />
      <div className='container'>
        <Navbar />
        <main className='main-section'>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default App;
