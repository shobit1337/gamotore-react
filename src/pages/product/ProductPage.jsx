import React from 'react';
import { ProductDetails, ProductShowcase } from './components';

const ProductPage = () => {
  return (
    <>
      <h1 className='product-title border-top py-sm'>Cyberpunk 2077</h1>
      {/* <div className='product-nav'>
        <a href='#'>Overview</a>
        <a href='#'>Achievements</a>
      </div> */}
      <div className='product-container'>
        <div className='product-page-details'>
          <ProductShowcase />
          {/* Product Description */}
          <>
            <div>
              Cyberpunk 2077 is an open-world, action-adventure RPG set in the
              dark future of Night City — a dangerous megalopolis obsessed with
              power, glamor, and ceaseless body modification.
            </div>
            <div className='d-flex gap-md my-sm'>
              <span>
                <div className='text-dark-light'>Genres</div>
                <a href='/'> Action</a> <a href='/'>RPG</a>
                <a href='/'>Open World</a> <a href='/'>Adventure</a>
              </span>
              <span>
                <div className='text-dark-light'>Features</div>
                <a href='/'>Controller Support</a>,<a href='/'>Single Player</a>
              </span>
            </div>
            <div className='product-heading'>CYBERPUNK 2077</div>
            <div className='product-description'>
              Cyberpunk 2077 is an open-world, action-adventure RPG set in the
              megalopolis of Night City, where you play as a cyberpunk mercenary
              wrapped up in a do-or-die fight for survival. Improved and
              featuring all-new free additional content, customize your
              character and playstyle as you take on jobs, build a reputation,
              and unlock upgrades. The relationships you forge and the choices
              you make will shape the story and the world around you. Legends
              are made here. What will yours be?
            </div>
            <div className='product-heading'>PLAY AS A MERCENARY OUTLAW</div>
            <div className='product-description'>
              Become a cyberpunk, an urban mercenary equipped with cybernetic
              enhancements and build your legend on the streets of Night City.
            </div>
            <div className='product-heading'>
              EXPLORE THE CITY OF THE FUTURE
            </div>
            <div className='product-description'>
              Night City is packed to the brim with things to do, places to see,
              and people to meet. And it’s up to you where to go, when to go,
              and how to get there.
            </div>
            <div className='product-heading'>BUILD YOUR LEGEND</div>
            <div className='product-description'>
              Go on daring adventures and build relationships with unforgettable
              characters whose fates are shaped by the choices you make.
            </div>
            <div className='product-heading'>EQUIPPED WITH IMPROVEMENTS</div>
            <div className='product-description'>
              Experience Cyberpunk 2077 with a host of changes and improvements
              to gameplay and economy, the city, map usage, and more.
            </div>
            <div className='product-heading'>
              INCLUDES FREE ADDITIONAL CONTENT
            </div>
            <div className='product-description'>
              Get your hands on a haul of free items including new guns and
              melee weapons, as well as extra customization options and more.
            </div>
          </>
        </div>
        <ProductDetails />
      </div>
    </>
  );
};

export default ProductPage;
