import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth-context';
import { loginUser } from '../../store/auth/actions';

const LoginPage = () => {
  const email = useRef('');
  const password = useRef('');
  const navigate = useNavigate();
  const location = useLocation();
  const { user, dispatchAuth } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      let response = await loginUser(dispatchAuth, {
        email: email.current.value,
        password: password.current.value,
      });
      if (!response?.foundUser) throw Error('No User Found');
      navigate(location.state?.from?.pathname || '/', { state: undefined });
    } catch (error) {
      console.error(error);
    }
  };

  const showError = (error) => {
    if (error) {
      return (
        <div className='alert alert-danger'>
          <i className='fas fa-exclamation-triangle'></i>
          {error}
        </div>
      );
    } else return null;
  };

  return (
    <div
      className='bg-dark text-light d-flex flex-center'
      style={{ height: '100vh' }}>
      <div className='auth-card'>
        <img src='/assets/gamotore-logo-light.svg' alt='' />
        <h4 className='text-light'>Sign In</h4>
        {showError(user.errorMessage)}
        <input
          className='input-text'
          type='email'
          ref={email}
          placeholder='Email'
        />
        <input
          className='input-text'
          type='password'
          ref={password}
          placeholder='Password'
        />
        <span className='d-flex justify-start gap-xs items-center'>
          <input type='checkbox' name='remember-me' id='remember-me' />
          <span>Remember me</span>
        </span>
        <button className='btn btn-rounded text-light' onClick={handleLogin}>
          Sign In
        </button>
        <span>
          Forgot your password?
          <Link to='/forgot-password' className='text-light'>
            Reset
          </Link>
        </span>
        <span>
          Don't have a Gamotore Account?
          <Link to='/signup' className='text-light'>
            Sign Up
          </Link>
        </span>
        <span>
          Back to{' '}
          <Link to='/' className='text-light'>
            Store
          </Link>
        </span>
      </div>
    </div>
  );
};

export default LoginPage;
