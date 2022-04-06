import React from 'react';
import NotFound from '../../assets/404.svg';

const PageNotFound = () => {
  return (
    <div className='d-flex flex-center'>
      <img src={NotFound} alt='not-found' style={{ maxHeight: '90vh' }} />
    </div>
  );
};

export default PageNotFound;
