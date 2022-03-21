import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/auth-context';
import { logout } from '../../store/auth/actions';

const Header = () => {
  const { user, dispatchAuth } = useAuth();
  return (
    <header className=''>
      <nav>
        <div className='nav-logo'>
          <img src='/assets/gamotore-logo-light.svg' alt='' />
        </div>
        <div className='nav-list'>
          <div className='nav-left'>
            <Link to='/' className='nav-item'>
              Store
            </Link>
            <Link to='/about' className='nav-item'>
              About
            </Link>
            <Link to='/support' className='nav-item'>
              Support
            </Link>
          </div>
          <div className='nav-right'>
            <span className='nav-item'>
              <i className='fas fa-globe'></i>
            </span>
            {user.userDetails ? (
              <>
                <Link to='/profile' className='nav-item'>
                  <i className='fas fa-user mr-xxxs'></i>User
                </Link>
                <span
                  className='nav-item'
                  onClick={(e) => logout(dispatchAuth)}>
                  <i className='fas fa-sign-out-alt mr-xxxs'></i>LOG OUT
                </span>
              </>
            ) : (
              <>
                <Link to='/login' className='nav-item'>
                  <i className='fas fa-sign-out-alt mr-xxxs'></i>LOGIN
                </Link>
                <Link to='/signup' className='nav-item'>
                  <i className='fas fa-sign-out-alt mr-xxxs'></i>SIGN UP
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
