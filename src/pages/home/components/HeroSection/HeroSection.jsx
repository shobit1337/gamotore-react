import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = ({ products }) => {
  const [heroItems, setHeroItems] = useState([...products]);
  const [activeItem, setActiveItem] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const showcaseImageInterwal = setInterval(() => {
      if (activeItem < heroItems.length - 1) setActiveItem((no) => no + 1);
      else setActiveItem(0);
    }, 5000);
    return () => {
      clearInterval(showcaseImageInterwal);
    };
  }, [activeItem, heroItems]);

  useEffect(() => {
    setHeroItems(products.slice(0, 6));
  }, [products]);
  if (heroItems.length)
    return (
      <div className='hero-section'>
        <div className='hero-image'>
          <img src={heroItems[activeItem].largeImages[0]} alt='' />
          <div className='hero-image-overflow'>
            <div>Out Now</div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              eaque dolore incidunt beatae ad.{' '}
            </div>
            <div>Starting at ${heroItems[activeItem].price}</div>
            <div>
              <button
                className='btn btn-light btn-sm mr-md cursor-pointer'
                onClick={() =>
                  navigate(`/product/${heroItems[activeItem]._id}`)
                }>
                Learn More
              </button>
              <button className='btn btn-light btn-xs btn-outlined cursor-pointer'>
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>

        <div className='hero-list'>
          {heroItems.length
            ? heroItems.map((item, index) => (
                <div
                  className={`hero-item ${
                    index === activeItem ? 'active' : ''
                  }`}
                  key={item._id}
                  onClick={() => setActiveItem(index)}>
                  <img src={item.thumbnailImage} alt='' />
                  {item.title}
                </div>
              ))
            : null}
        </div>
      </div>
    );
  return null;
};

export default HeroSection;
