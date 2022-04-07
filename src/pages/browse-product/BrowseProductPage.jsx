import React, { useState, useEffect } from 'react';
import { Filters, ProductCard, SortByDropdown } from '../../components';
import { useFilters } from '../../context/filter-context';
import { filterList } from '../../utils/filters';
import { getAllProducts, getPaginatedProducts } from '../../utils/products';

const BrowseProductPage = () => {
  const { filters } = useFilters();
  const [productList, setProductList] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);

  const [list, setList] = useState([]);

  const [pageInfo, setPageInfo] = useState({
    nextPage: 0,
    startIndex: 0,
    endIndex: 0,
    totalProducts: 0,
    totalPages: 0,
  });

  const [page, setPage] = useState(1);

  useEffect(() => {
    // Geting Paginated Results
    const products = filters.appliedFilters > 0 ? filteredProduct : productList;
    (async () => {
      const data = await getPaginatedProducts(products, page, 6);
      setList(data.list);
      setPageInfo(data.info);
    })();
  }, [page, productList, filters, filteredProduct]);

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
            {!!list.length ? (
              list.map((product) => (
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
          {/* Pagination */}

          <div className='pagination'>
            {Array.from(Array(pageInfo.totalPages)).map((_, i) => {
              const nextPage = i + 1;

              return (
                <span
                  className={`pagination-btn ${
                    nextPage === page ? 'active' : 'cursor-pointer'
                  }`}
                  key={nextPage}
                  onClick={() => setPage(nextPage)}>
                  {nextPage}
                </span>
              );
            })}
          </div>
        </div>
        <Filters />
      </div>
    </>
  );
};

export default BrowseProductPage;
