import React, { useState, useEffect } from 'react';
import { Filters, Loader, ProductCard, SortByDropdown } from '../../components';
import { useFilters } from '../../context/filter-context';
import { filterList } from '../../utils/filters';
import { getAllProducts } from '../../utils/products';

const BrowseProductPage = () => {
  const { filters } = useFilters();
  const [productList, setProductList] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);

  useEffect(() => {
    // Fetching the Products from Server and setting the state
    (async () => {
      const data = await getAllProducts();
      setProductList([...data]);
    })();

    return () => {
      setProductList([]);
    };
  }, []);

  useEffect(() => {
    if (filters.appliedFilters > 0 && productList.length > 0) {
      setFilteredProduct(filterList(productList, filters));
    }
    if (filters.appliedFilters === 0) {
      setFilteredProduct([]);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [productList, filters]);

  return (
    <>
      <h4 className='cart-title border-top py-sm'>Browse</h4>

      {/* Product Listing Container  */}
      <div className='product-container'>
        <div className='product-listing-container'>
          <div className='text-sm text-dark-lighter py-xs'>
            Sort By:
            <SortByDropdown />
          </div>
          <div className='product-listing'>
            {filters.appliedFilters ? (
              !!filteredProduct.length ? (
                filteredProduct.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))
              ) : (
                <div>No Matched Product Found</div>
              )
            ) : !!productList.length ? (
              productList.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))
            ) : (
              <div>No Product Found</div>
            )}
            <div className='empty-card'></div>
            <div className='empty-card'></div>
            <div className='empty-card'></div>
            <div className='empty-card'></div>
          </div>
          <Loader />
          {/* Pagination */}
          <div className='pagination'>
            <span className='pagination-btn'>&laquo;</span>
            <span className='pagination-btn'>1</span>
            <span className='pagination-btn active'>2</span>
            <span className='pagination-btn'>3</span>
            <span className='pagination-btn'>4</span>
            <span className='pagination-btn'>5</span>
            <span className='pagination-btn'>6</span>
            <span className='pagination-btn'>&raquo;</span>
          </div>
        </div>
        <Filters />
      </div>
    </>
  );
};

export default BrowseProductPage;
