import React from 'react';
import { HeroSection } from './components';
import { CategoryCard, ProductCard } from '../../components';

const HomePage = () => {
  return (
    <>
      {/* Hero */}
      <HeroSection />
      {/* Categories */}
      <div className='category-section'>
        <div className='listing-heading py-md'>Popular Genres</div>
        <div className='category-container'>
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
      </div>
      {/* Horizontal List of Cards */}
      <div className='listing-section mt-md'>
        <div className='listing-heading py-md'>
          Games On Sale <i className='fas fa-angle-right'></i>
        </div>
        <div className='listing-container'>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      {/* Footer */}
    </>
  );
};

export default HomePage;
