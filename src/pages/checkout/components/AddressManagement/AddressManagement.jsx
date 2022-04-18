import React, { useState, useEffect } from 'react';
import Loader from '../../../../components/Loader/Loader';
import Modal from '../../../../components/Modal/Modal';
import { useAuth } from '../../../../context/auth-context';
import {
  addAddress,
  deleteAddress,
  getAllAddress,
} from '../../../../utils/address';

const AddressManagement = ({ setSelectedAddress }) => {
  const {
    user: { encodedToken },
  } = useAuth();
  const [addresses, setAddresses] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteAddress = async (addressId) => {
    const updatedAddresses = await deleteAddress(encodedToken, addressId);
    setAddresses([...updatedAddresses]);
  };

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const updatedAddresses = await getAllAddress(encodedToken);
      if (updatedAddresses?.length) {
        setAddresses([...updatedAddresses]);
      }
      setIsLoading(false);
    })();
  }, [encodedToken]);

  return (
    <>
      <div className='d-flex justify-between items-center'>
        <span className='text-md text-light'>Address:</span>
        <button
          className='text-sm btn btn-xs btn-outlined btn-rounded btn-light text-light d-flex flex-center gap-xs'
          onClick={() => {
            setIsModalOpen(true);
          }}>
          <i className='far fa-plus-square'></i>ADD ADDRESS
        </button>
      </div>
      <div className='address-container d-flex flex-column gap-sm'>
        {!isLoading ? (
          <>
            {!!addresses.length ? (
              addresses.map((address, index) => (
                <div key={address._id} className='address-card'>
                  <input
                    type='radio'
                    name={`address`}
                    id={`address-${index}`}
                    onClick={() => {
                      setSelectedAddress({ ...address });
                    }}
                  />
                  <label
                    htmlFor={`address-${index}`}
                    onClick={() => {
                      setSelectedAddress({ ...address });
                    }}>
                    {`${address.name}, ${address.street}, ${address.city}, ${
                      address.state
                    }, ${address.pin}, ${address.country.toUpperCase()}, ${
                      address.phone
                    }, `}
                  </label>
                  <i
                    className='far fa-trash-alt delete-btn'
                    onClick={() => handleDeleteAddress(address._id)}
                  />
                </div>
              ))
            ) : (
              <div>No Address Found</div>
            )}
          </>
        ) : (
          <Loader />
        )}
        {isModalOpen && (
          <AddAddressModal
            setIsModalOpen={setIsModalOpen}
            setAddresses={setAddresses}
          />
        )}
      </div>
    </>
  );
};

const AddAddressModal = ({ setIsModalOpen, setAddresses }) => {
  const {
    user: { encodedToken },
  } = useAuth();
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    street: '',
    city: '',
    state: '',
    pin: '',
    country: '',
    phone: '',
  });

  const handleAddAddress = async () => {
    if (![...Object.values(formData)].some((value) => value === '')) {
      setError('');
      const updatedAddresses = await addAddress(encodedToken, formData);
      setAddresses([...updatedAddresses]);
      setIsModalOpen(false);
    } else {
      setError('Please fill all values');
    }
  };

  return (
    <Modal onClose={() => setIsModalOpen(false)}>
      <div className='auth-card'>
        <h4 className='text-light'>New Address:</h4>
        {error ? <span className='text-danger'>{error}</span> : null}
        <input
          className='input-text'
          type='text'
          name='name'
          placeholder='Name'
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
          }}
          value={formData.name}
        />
        <input
          className='input-text'
          type='text'
          name='street'
          placeholder='Street'
          onChange={(e) => {
            setFormData({ ...formData, street: e.target.value });
          }}
          value={formData.street}
        />
        <input
          className='input-text'
          type='text'
          name='city'
          placeholder='City'
          onChange={(e) => {
            setFormData({ ...formData, city: e.target.value });
          }}
          value={formData.city}
        />
        <input
          className='input-text'
          type='text'
          name='state'
          placeholder='State'
          onChange={(e) => {
            setFormData({ ...formData, state: e.target.value });
          }}
          value={formData.state}
        />
        <input
          className='input-text'
          type='text'
          name='pin'
          placeholder='Pincode'
          onChange={(e) => {
            setFormData({ ...formData, pin: e.target.value });
          }}
          value={formData.pin}
        />
        <input
          className='input-text'
          type='text'
          name='country'
          placeholder='Country'
          onChange={(e) => {
            setFormData({ ...formData, country: e.target.value });
          }}
          value={formData.country}
        />
        <input
          className='input-text'
          type='text'
          name='phone'
          placeholder='Phone Number'
          onChange={(e) => {
            setFormData({ ...formData, phone: e.target.value });
          }}
          value={formData.phone}
        />
        <button
          className='btn btn-rounded text-light btn-sm'
          onClick={handleAddAddress}>
          ADD
        </button>
      </div>
    </Modal>
  );
};

export default AddressManagement;
