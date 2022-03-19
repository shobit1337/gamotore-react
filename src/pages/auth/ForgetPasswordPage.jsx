import React from 'react';

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
          <a className='text-light' href='/pages/forgot-password.html'>
            Sign In
          </a>
        </span>
        <span>
          Don't have a Gamotore Account?
          <a className='text-light' href='/pages/sign-up.html'>
            Sign Up
          </a>
        </span>
        <span>
          Back to{' '}
          <a className='text-light' href='/'>
            Store
          </a>
        </span>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
