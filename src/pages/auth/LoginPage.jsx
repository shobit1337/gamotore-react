import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div
      className='bg-dark text-light d-flex flex-center'
      style={{ height: '100vh' }}>
      <div className='auth-card'>
        <img src='/assets/gamotore-logo-light.svg' alt='' />
        <h4 className='text-light'>Sign In</h4>
        <input
          className='input-text'
          type='email'
          name='email'
          id='email'
          placeholder='Email'
        />
        <input
          className='input-text'
          type='password'
          name='password'
          id='password'
          placeholder='Password'
        />
        <span className='d-flex justify-start gap-xs items-center'>
          <input type='checkbox' name='remember-me' id='remember-me' />
          <span>Remember me</span>
        </span>
        <button className='btn btn-rounded text-light'>Sign In</button>
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
