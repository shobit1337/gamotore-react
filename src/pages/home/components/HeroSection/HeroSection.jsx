import React from 'react';

const HeroSection = () => {
  return (
    <div className='hero-section'>
      <div className='hero-image'>
        <img
          src='https://cdn2.unrealengine.com/egs-genshin-impact-2-5-desktop-1248x702-1248x702-93290d7fdc8f.jpg?h=1080&resize=1&w=1920'
          alt=''
        />
        <div className='hero-image-overflow'>
          <div>Out Now</div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eaque
            dolore incidunt beatae ad.{' '}
          </div>
          <div>Starting at $2,999.00</div>
          <div>
            <button className='btn btn-light btn-sm'>Learn More</button>
            <button className='btn btn-light btn-xs btn-outlined'>
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>

      <div className='hero-list'>
        <div className='hero-item'>
          <img
            src='https://cdn2.unrealengine.com/egs-en-genshin-impact-2-5-thumb-1200x1600-1200x1600-2762bd19b910.jpg'
            alt=''
          />
          Genshin Impact
        </div>
        <div className='hero-item'>
          <img
            src='https://cdn2.unrealengine.com/egs-en-genshin-impact-2-5-thumb-1200x1600-1200x1600-2762bd19b910.jpg'
            alt=''
          />
          Sifu - EGS Exlusive
        </div>
        <div className='hero-item'>
          <img
            src='https://cdn2.unrealengine.com/egs-en-genshin-impact-2-5-thumb-1200x1600-1200x1600-2762bd19b910.jpg'
            alt=''
          />
          Total War: WARHAMMER
        </div>
        <div className='hero-item'>
          <img
            src='https://cdn2.unrealengine.com/egs-en-genshin-impact-2-5-thumb-1200x1600-1200x1600-2762bd19b910.jpg'
            alt=''
          />
          Rainbow Six: Extraction
        </div>
        <div className='hero-item'>
          <img
            src='https://cdn2.unrealengine.com/egs-en-genshin-impact-2-5-thumb-1200x1600-1200x1600-2762bd19b910.jpg'
            alt=''
          />
          Cyberpunk 2077
        </div>
        <div className='hero-item'>
          <img
            src='https://cdn2.unrealengine.com/egs-en-genshin-impact-2-5-thumb-1200x1600-1200x1600-2762bd19b910.jpg'
            alt=''
          />
          Teamfight Tactics
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
