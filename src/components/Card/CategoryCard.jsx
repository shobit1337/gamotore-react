import React from 'react';

const CategoryCard = () => {
  return (
    <a href='/pages/browse-products.html' className='category-card'>
      <img
        src='https://cdn1.epicgames.com/dda64c2956b54f1ba3cd97f6aaee775f/offer/EGS_TotalWarWARHAMMERIII_CreativeAssembly_S6-1200x1600-bf935f14317eaf51f4906079a2888ced.jpg'
        alt=''
      />
      <span className='category-name'>Action Games</span>
    </a>
  );
};

export default CategoryCard;
