import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/cart-context';

const Navbar = () => {
  const {
    cart: { totalQuantity },
  } = useCart();
  return (
    <div className='sticky-header text-dark-light text-medium'>
      <div className='input-text-group'>
        <i className='fas fa-search'></i>
        <input type='text' placeholder='Search' className='input-field' />
      </div>
      <div
        className='d-flex justify-between items-center'
        style={{ width: '100%' }}>
        <span className='d-flex gap-xs items-center'>
          <Link to='/'>Discover</Link>
          <Link to='/browse'>Browse</Link>
          <Link to='/news'>News</Link>
        </span>
        <span className='d-flex gap-xs items-center'>
          <Link to='/wishlist'>Wishlist</Link>
          <Link to='/cart' className='text-light'>
            Cart
            {totalQuantity > 0 ? (
              <span className='badge badge-accient ml-xs p-xxxxs text-xs'>
                {totalQuantity}
              </span>
            ) : null}
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
