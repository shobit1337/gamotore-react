import React from 'react';
import { useFilters } from '../../context/filter-context';
import './SortByDropdown.css';

const sortingData = [
  { name: 'Relevance', type: '', by: '' },
  { name: 'New Release', type: 'ASCENDING', by: 'RELEASE' },
  {
    name: 'Alphabetical A-Z',
    type: 'ASCENDING',
    by: 'ALPHABET',
  },
  {
    name: 'Alphabetical Z-A',
    type: 'DESCENDING',
    by: 'ALPHABET',
  },
  {
    name: 'Price: Low to High',
    type: 'ASCENDING',
    by: 'PRICE',
  },
  {
    name: 'Price: High to Low',
    type: 'DESCENDING',
    by: 'PRICE',
  },
];

const SortByDropdown = () => {
  const {
    filters: { sort },
    filterBySort,
  } = useFilters();

  return (
    <span className='dropdown text-light'>
      <span className='dropdown-title'>
        <select
          value={JSON.stringify(sort)}
          onChange={(e) => filterBySort(JSON.parse(e.target.value))}
          className='select-dropdown'>
          {sortingData.map((item, index) => (
            <option
              key={index}
              value={JSON.stringify(item)}
              className='list-item'>
              {item.name}
            </option>
          ))}
        </select>
      </span>
    </span>
  );
};

export default SortByDropdown;
