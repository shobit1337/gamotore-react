import React, { useState, useEffect, useRef } from 'react';
import './Search.css';
import { SearchResults } from './components';
import { useFocus } from '../../hooks/useFocus';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';

const Search = () => {
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [ref, isFocused] = useFocus();
  const inputRef = useRef();

  useOnClickOutside(ref, () => setShowModal(false));

  useEffect(() => {
    if (isFocused) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  useEffect(() => {
    if (search.trim()) {
      setShowModal(true);
    } else setShowModal(false);
  }, [search]);

  return (
    <div className='search-container hide-mobile' tabIndex='0' ref={ref}>
      <div className='input-text-group'>
        <i className='fas fa-search'></i>
        <input
          type='text'
          ref={inputRef}
          placeholder='Search'
          className='input-field'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {showModal && <SearchResults search={search} setSearch={setSearch} />}
    </div>
  );
};

export default Search;
