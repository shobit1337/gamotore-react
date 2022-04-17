import React from 'react';
import { NavLink } from 'react-router-dom';
import { useShop } from '../../context/shop-context';
import { Search } from '../';

const Navbar = () => {
  const {
    shop: {
      cart: { totalQuantity },
    },
  } = useShop();
  const activeNav = { fontWeight: 600, color: 'var(--light-color)' };
  return (
    <div className='sticky-header text-dark-light text-medium'>
      <Search />
      <div
        className='d-flex justify-between items-center'
        style={{ width: '100%' }}>
        <span className='d-flex gap-xs items-center'>
          <NavLink
            style={({ isActive }) => (isActive ? activeNav : undefined)}
            to='/'>
            Discover
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeNav : undefined)}
            to='/browse'>
            Browse
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeNav : undefined)}
            to='/news'
            className='hide-mobile'>
            News
          </NavLink>
        </span>
        <span className='d-flex gap-xs items-center'>
          <NavLink
            style={({ isActive }) => (isActive ? activeNav : undefined)}
            to='/wishlist'>
            Wishlist
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeNav : undefined)}
            to='/cart'>
            Cart
            {totalQuantity > 0 ? (
              <span className='badge badge-accient ml-xs p-xxxxs text-xs'>
                {totalQuantity}
              </span>
            ) : null}
          </NavLink>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
