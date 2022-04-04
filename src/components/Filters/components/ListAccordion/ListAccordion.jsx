import React, { useState } from 'react';

const ListAccordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className='filter-category  filter-category-open'>
      <span
        className='filter-category-title'
        onClick={() => setIsOpen((state) => !state)}>
        {title} <i className='fas fa-angle-down'></i>
      </span>
      {isOpen && <ul className='filter-category-container'>{children}</ul>}
    </div>
  );
};

export default ListAccordion;
