import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo-light.svg';
import { useAuth } from '../../context/auth-context';
import { signupUser } from '../../store/auth/actions';

const SignupPage = () => {
  const firstName = useRef('');
  const lastName = useRef('');
  const country = useRef('');
  const userName = useRef('');
  const email = useRef('');
  const password = useRef('');

  const { dispatchAuth } = useAuth();
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      let response = await signupUser(dispatchAuth, {
        firstName: firstName.current.value,
        lastName: lastName.current.value,
        country: country.current.value,
        userName: userName.current.value,
        email: email.current.value,
        password: password.current.value,
      });
      if (!response?.createdUser) return;
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className='bg-dark text-light d-flex flex-center'
      style={{ height: '100vh' }}>
      <div className='auth-card'>
        <img src={logo} alt='logo' />
        <h4 className='text-light'>Sign Up</h4>
        <input
          className='input-text'
          type='text'
          ref={country}
          placeholder='Country'
        />
        <span className='d-flex gap-sm'>
          <input
            className='input-text'
            type='text'
            ref={firstName}
            placeholder='First Name'
          />
          <input
            className='input-text'
            type='text'
            ref={lastName}
            placeholder='Last Name'
          />
        </span>
        <input
          className='input-text'
          type='text'
          ref={userName}
          placeholder='Display Name'
        />
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
        <button className='btn btn-rounded text-light' onClick={handleSignup}>
          Sign Up
        </button>

        <span>
          Have a Gamotore Account?
          <Link to='/login' className='text-light'>
            Sign In
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

export default SignupPage;
