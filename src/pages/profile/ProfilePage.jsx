import React from 'react';

const ProfilePage = () => {
  return (
    <>
      <h4 className='cart-title border-top py-sm'>My Profile</h4>

      {/* <!-- Profile Container --> */}
      <div className='profile-container'>
        <div className='auth-card profile-setting'>
          <input
            className='input-text'
            type='text'
            name='country'
            id='country'
            placeholder='Country'
            value='India'
          />
          <span className='d-flex gap-sm'>
            <input
              className='input-text'
              type='text'
              name='first-name'
              id='first-name'
              placeholder='First Name'
              value='Shobit'
            />
            <input
              className='input-text'
              type='text'
              name='last-name'
              id='last-name'
              placeholder='Last Name'
              value='Deshwal'
            />
          </span>
          <input
            className='input-text'
            type='text'
            name='display-name'
            id='display-name'
            placeholder='Display Name'
            value='shobit1337'
          />
          <input
            className='input-text'
            type='email'
            name='email'
            id='email'
            placeholder='Email'
            value='shobitdeshwal1337@gmail.com'
          />
          <input
            className='input-text'
            type='password'
            name='password'
            id='password'
            placeholder='Old Password'
          />
          <input
            className='input-text'
            type='password'
            name='password'
            id='password'
            placeholder='New Password'
          />
          <button className='btn btn-rounded text-light'>Update</button>
        </div>
        <div className='account-setting'></div>
      </div>
    </>
  );
};

export default ProfilePage;
