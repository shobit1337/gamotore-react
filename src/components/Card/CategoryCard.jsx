import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFilters } from '../../context/filter-context';

const CategoryCard = ({ category }) => {
  const { filterByCategory } = useFilters();
  const navigate = useNavigate();
  const handleGoToCategory = (category) => {
    filterByCategory(category);
    navigate('/browse');
  };

  return (
    <div
      className='category-card cursor-pointer'
      onClick={() => handleGoToCategory(category.categoryName)}>
      <img src={category.thumbnailImage} alt='' />
      <span className='category-name'>{category.categoryName}</span>
    </div>
  );
};

export default CategoryCard;
