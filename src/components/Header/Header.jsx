import React from 'react';
import lightLogo from "../../assets/logo-light.svg"
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../context/auth-context';
import { logout } from '../../store/auth/actions';

const Header = () => {
  const { user, dispatchAuth } = useAuth();

  const activeNav = { fontWeight: 600, color: 'var(--light-color)' };
  return (
    <header className=''>
      <nav>
        <div className='nav-logo'>
          <img src={lightLogo} alt='' />
        </div>
        <div className='nav-list'>
          <div className='nav-left'>
            <NavLink
              to='/'
              style={({ isActive }) => (isActive ? activeNav : undefined)}
              className='nav-item'>
              Store
            </NavLink>
            <NavLink
              to='/about'
              style={({ isActive }) => (isActive ? activeNav : undefined)}
              className='nav-item'>
              About
            </NavLink>
            <NavLink
              to='/support'
              style={({ isActive }) => (isActive ? activeNav : undefined)}
              className='nav-item'>
              Support
            </NavLink>
          </div>
          <div className='nav-right d-flex items-center gap-sm'>
            {user.userDetails ? (
              <>
                <NavLink
                  to='/profile'
                  style={({ isActive }) => (isActive ? activeNav : undefined)}
                  className='nav-item d-flex items-center gap-xxxs'>
                  <div className='avatar avatar-xs avatar-circle'>
                    {user.userDetails.displayImage ? (
                      <img
                        className='avatar-image'
                        src={user.userDetails.displayImage}
                        alt=''
                      />
                    ) : (
                      <i className='fas fa-user mr-xxxs'></i>
                    )}
                  </div>
                  {user.userDetails.displayName}
                </NavLink>
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
