import React from 'react';
import { Link } from 'react-router-dom';

const ForgetPasswordPage = () => {
  return (
    <div
      className='bg-dark text-light d-flex flex-center'
      style={{ height: '100vh' }}>
      <div className='auth-card'>
        <img src='/assets/gamotore-logo-light.svg' alt='' />
        <h4 className='text-light'>Reset Password</h4>
        <input
          className='input-text'
          type='email'
          name='email'
          id='email'
          placeholder='Email'
        />
        <button className='btn btn-rounded text-light'>RESET</button>
        <span>
          Have an account?
          <Link to='/login' className='text-light'>
            Sign In
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

export default ForgetPasswordPage;
