import React, { useState, useEffect } from 'react';
import './Filters.css';
import { useFilters } from '../../context/filter-context';
import { ListAccordion } from './components';

const Filters = () => {
  const {
    filters: { appliedFilters, price, platform, categoryName, searchName },
    filterByPlatform,
    filterByCategory,
    filterByPrice,
    filterBySearch,
    clearFilters,
  } = useFilters();
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
    filterBySearch(e.target.value);
  };

  useEffect(() => {
    setSearch(searchName);
  }, [searchName]);

  useEffect(() => {
    return () => {
      clearFilters();
    };
  }, []);

  return (
    <div className='filters-container'>
      <div className='d-flex justify-between items-center py-xxs'>
        <span className='text-sm'>
          Filters {appliedFilters > 0 ? `[${appliedFilters}]` : null}
        </span>
        <span className='text-xs' onClick={() => clearFilters()}>
          RESET
        </span>
      </div>
      <div className='input-text-group input-rounded'>
        <i className='fas fa-search'></i>
        <input
          type='text'
          placeholder='Keywords'
          className='input-field'
          value={search}
          onChange={handleSearch}
        />
      </div>
      <ListAccordion title={'Price'}>
        <li
          className={`filter-item ${price.type === 'FREE' ? 'selected' : ''}`}
          onClick={() => filterByPrice({ type: 'FREE' })}>
          Free
        </li>
        <li
          className={`filter-item ${
            price.type === 'LESS_THAN' && price.amount === 750 ? 'selected' : ''
          }`}
          onClick={() => filterByPrice({ type: 'LESS_THAN', amount: 750 })}>
          Under ₹750.00
        </li>
        <li
          className={`filter-item ${
            price.type === 'LESS_THAN' && price.amount === 1500
              ? 'selected'
              : ''
          }`}
          onClick={() => filterByPrice({ type: 'LESS_THAN', amount: 1500 })}>
          Under ₹1,500.00
        </li>
        <li
          className={`filter-item ${
            price.type === 'LESS_THAN' && price.amount === 2250
              ? 'selected'
              : ''
          }`}
          onClick={() => filterByPrice({ type: 'LESS_THAN', amount: 2250 })}>
          Under ₹2,250.00
        </li>
        <li
          className={`filter-item ${
            price.type === 'MORE_THAN' && price.amount === 1099
              ? 'selected'
              : ''
          }`}
          onClick={() => filterByPrice({ type: 'MORE_THAN', amount: 1099 })}>
          ₹1,099.00 and above
        </li>
        <li
          className={`filter-item ${
            price.type === 'DISCOUNTED' ? 'selected' : ''
          }`}
          onClick={() => filterByPrice({ type: 'DISCOUNTED' })}>
          Discounted
        </li>
      </ListAccordion>
      {/* Categories */}
      <ListAccordion title={'Category'}>
        <li
          className={`filter-item ${
            categoryName.includes('Action') ? 'selected' : ''
          }`}
          onClick={() => filterByCategory('Action')}>
          Action
        </li>
        <li
          className={`filter-item ${
            categoryName.includes('Open World') ? 'selected' : ''
          }`}
          onClick={() => filterByCategory('Open World')}>
          Open World
        </li>
        <li
          className={`filter-item ${
            categoryName.includes('Shooter') ? 'selected' : ''
          }`}
          onClick={() => filterByCategory('Shooter')}>
          Shooter Games
        </li>
        <li
          className={`filter-item ${
            categoryName.includes('Indie') ? 'selected' : ''
          }`}
          onClick={() => filterByCategory('Indie')}>
          Indie Games
        </li>
        <li
          className={`filter-item ${
            categoryName.includes('Multiplayer') ? 'selected' : ''
          }`}
          onClick={() => filterByCategory('Multiplayer')}>
          Multiplayer
        </li>
        <li
          className={`filter-item ${
            categoryName.includes('First Person') ? 'selected' : ''
          }`}
          onClick={() => filterByCategory('First Person')}>
          First Person
        </li>
      </ListAccordion>
      {/* Platform */}
      <ListAccordion title={'Platform'}>
        <li
          className={`filter-item ${
            platform.includes('windows') ? 'selected' : ''
          }`}
          onClick={() => filterByPlatform('windows')}>
          Windows
        </li>
        <li
          className={`filter-item ${
            platform.includes('mac') ? 'selected' : ''
          }`}
          onClick={() => filterByPlatform('mac')}>
          Mac OS
        </li>
      </ListAccordion>
    </div>
  );
};

export default Filters;
