import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/auth-context';
import { updateUser } from '../../store/auth/actions';

const ProfilePage = () => {
  const { user, dispatchAuth } = useAuth();
  const [formData, setFormData] = useState({});

  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const uploadHandler = async (e) => {
    const selected = e.target.files[0];

    if (selected && ['image/png', 'image/jpeg'].includes(selected.type)) {
      const body = new FormData();
      body.append('image', selected);
      await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMG_API}`,
        {
          method: 'POST',
          body: body,
        }
      )
        .then((res) => res.json())
        .then(({ data }) => {
          if (data.url) {
            setFormData({ ...formData, displayImage: data.url });
          }
        })
        .catch((err) => {
          throw new Error(err);
        });
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image files (png/jpeg)');
    }
  };

  useEffect(() => {
    if (user.userDetails) {
      const { firstName, lastName, displayName, country, email, displayImage } =
        user.userDetails;
      setFormData({
        firstName,
        lastName,
        displayName,
        country,
        email,
        displayImage,
        oldPassword: '',
        newPassword: '',
      });
    }
  }, [user]);

  return formData.email ? (
    <>
      <h3 className='cart-title border-top py-sm'>{`Welcome ${user.userDetails.firstName} ${user.userDetails.lastName},`}</h3>

      {/* <!-- Profile Container --> */}
      <div className='profile-container flex-wrap'>
        <div className='auth-card profile-setting'>
          <input
            className='input-text'
            type='text'
            name='country'
            id='country'
            placeholder='Country'
            onChange={(e) => {
              setFormData({ ...formData, country: e.target.value });
            }}
            value={formData.country}
          />
          <span className='d-flex gap-sm flex-wrap'>
            <input
              className='input-text'
              type='text'
              name='first-name'
              id='first-name'
              placeholder='First Name'
              onChange={(e) => {
                setFormData({ ...formData, firstName: e.target.value });
              }}
              value={formData.firstName}
            />
            <input
              className='input-text'
              type='text'
              name='last-name'
              id='last-name'
              placeholder='Last Name'
              onChange={(e) => {
                setFormData({ ...formData, lastName: e.target.value });
              }}
              value={formData.lastName}
            />
          </span>
          <input
            className='input-text'
            type='text'
            name='display-name'
            id='display-name'
            placeholder='Display Name'
            onChange={(e) => {
              setFormData({ ...formData, displayName: e.target.value });
            }}
            value={formData.displayName}
          />
          <input
            className='input-text'
            type='email'
            name='email'
            id='email'
            placeholder='Email'
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
            value={formData.email}
          />
          <input
            className='input-text'
            type='password'
            name='old-password'
            id='old-password'
            placeholder='Old Password'
            onChange={(e) => {
              setFormData({ ...formData, oldPassword: e.target.value });
            }}
            value={formData.oldPassword}
          />
          <input
            className='input-text'
            type='password'
            name='new-password'
            id='new-password'
            placeholder='New Password'
            onChange={(e) => {
              setFormData({ ...formData, newPassword: e.target.value });
            }}
            value={formData.newPassword}
          />
          <button
            className='btn btn-rounded text-light'
            onClick={() =>
              updateUser(dispatchAuth, user.encodedToken, formData)
            }>
            Update
          </button>
        </div>

        <div className='account-setting'>
          <h4>Edit your profile</h4>
          <div className='avatar avatar-xl avatar-circle'>
            <img className='avatar' src={formData.displayImage} alt='' />
            <span className='change-avatar-btn'>
              <input type='file' onChange={uploadHandler} />
              Upload Image
            </span>
          </div>
          {error && <div>{error}</div>}
          {file && <div>{file.name}</div>}
        </div>
      </div>
    </>
  ) : null;
};

export default ProfilePage;
