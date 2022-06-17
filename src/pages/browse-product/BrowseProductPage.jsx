import React, { useState, useEffect, useRef } from 'react';
import { Filters, ProductCard, SortByDropdown } from '../../components';
import { useFilters } from '../../context/filter-context';
import { filterList } from '../../utils/filters';
import { getAllProducts, getPaginatedProducts } from '../../utils/products';
import './BrowseProductPage.css';
const BrowseProductPage = () => {
  const { filters } = useFilters();
  const [productList, setProductList] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [visibleList, setVisibleList] = useState([]);
  const [visibleIndex, setVisibleIndex] = useState({
    start: 0,
    end: 1,
  });

  const [list, setList] = useState([]);

  // const [pageInfo, setPageInfo] = useState({
  //   startIndex: 0,
  //   endIndex: 0,
  // });

  const [page, setPage] = useState(1);

  const loader = useRef();
  const prevLoader = useRef();

  const observerCallback = (entries) => {
    if (entries[0].isIntersecting) {
      setPage((page) => page + 1);
      setVisibleIndex = (index) => ({
        start: index.start + 1,
        end: index.end + 1,
      });
    }
    if (entries[0].isIntersecting) {
      setVisibleIndex = (index) => ({
        start: index.start - 1,
        end: index.end - 1,
      });
    }
  };

  useEffect(() => {
    const obeserver = new IntersectionObserver(observerCallback);

    if (loader.current) {
      obeserver.observe(loader.current);
      obeserver.observe(prevLoader.current);
    }

    return () => {
      obeserver.unobserve(loader.current);
      obeserver.unobserve(prevLoader.current);
    };
  }, []);

  useEffect(() => {
    // Geting Paginated Results
    const products = filters.appliedFilters > 0 ? filteredProduct : productList;
    (async () => {
      if(page>visibleIndex.end)
      const data = await getPaginatedProducts(products, page, 6);

      setList((list) => [...list, ...data.list]);

      const visibileData = [...list, ...data.list].slice(
        visibleIndex.start,
        visibleIndex.end
      );
      setVisibleList((list) => visibileData);
    })();
  }, [page, productList, filters, filteredProduct, visibleIndex]);

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
    setPage(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [productList, filters]);

  return (
    <>
      <h4 className='cart-title border-top py-sm'>Browse</h4>

      {/* Product Listing Container  */}
      <div className='browse-product-container'>
        <div className='product-listing-container'>
          <div className='text-sm text-dark-lighter py-xs'>
            Sort By:
            <SortByDropdown />
          </div>
          <div className='product-listing'>
            <div
              className='empty-card'
              style={{ padding: '1rem' }}
              ref={prevLoader}></div>
            {!!list.length ? (
              list.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))
            ) : (
              <div>No Product Found</div>
            )}

            <div
              className='empty-card'
              style={{ padding: '1rem' }}
              ref={loader}></div>
            {/* <div className='empty-card'></div>
            <div className='empty-card'></div>
            <div className='empty-card'></div> */}
          </div>

          {/* Pagination */}

          {/* <div className='pagination'>
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
          </div> */}
        </div>
        <Filters />
      </div>
    </>
  );
};

export default BrowseProductPage;
