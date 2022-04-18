import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar, Footer, Header } from './components';

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

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
