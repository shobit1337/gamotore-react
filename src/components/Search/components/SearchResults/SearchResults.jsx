import React, { useState, useEffect } from 'react';
import { searchItems } from '../../../../utils/filters';
import { getAllProducts } from '../../../../utils/products';
import './SearchResults.css';
import { useFilters } from '../../../../context/filter-context';
import { useNavigate } from 'react-router-dom';

const SearchResults = ({ search, setSearch }) => {
  const { filterBySearch } = useFilters();
  const navigate = useNavigate();
  const [productList, setProductList] = useState([]);
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleShowAllSearchResults = () => {
    filterBySearch(search);
    setSearch('');
    navigate('/browse');
  };

  useEffect(() => {
    if (productList.length < 1)
      (async () => {
        const products = await getAllProducts();
        setProductList([...products]);
      })();
  }, [productList]);

  useEffect(() => {
    if (productList.length && search) {
      setIsLoading(true);
      const searchedResults = searchItems(productList, search);
      setResults([...searchedResults]);
      setIsLoading(false);
    }
    return () => {
      setResults([]);
    };
  }, [productList, search]);

  return (
    !isLoading && (
      <div className='search-results-container'>
        {productList.length > 0 && results.length > 0 ? (
          <>
            {results.map((product, index, results) =>
              results.length > 4 ? (
                index <= 4 && (
                  <span
                    key={product._id}
                    className='search-item'
                    onClick={() => navigate(`/product/${product._id}`)}>
                    {product.title}
                  </span>
                )
              ) : (
                <span
                  key={product._id}
                  className='search-item'
                  onClick={() => navigate(`/product/${product._id}`)}>
                  {product.title}
                </span>
              )
            )}
            {results.length > 4 && (
              <span
                className='search-item'
                onClick={handleShowAllSearchResults}>
                Show More
              </span>
            )}
          </>
        ) : (
          <span>No Result found</span>
        )}
      </div>
    )
  );
};

export default SearchResults;
