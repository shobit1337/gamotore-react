import React, { useEffect, useState } from 'react';
import { HeroSection, ListSection } from './components';
import { CategoryCard } from '../../components';
import { getAllProducts } from '../../utils/products';
import { getAllCategories } from '../../utils/categories';

const HomePage = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    (async () => {
      const productData = await getAllProducts();
      setProductList([...productData]);
      const categoriesData = await getAllCategories();
      setCategoryList([...categoriesData]);
    })();

    return () => {
      setCategoryList([]);
      setProductList([]);
    };
  }, []);

  return (
    <>
      {/* Hero */}
      <HeroSection
        products={productList.filter(
          (product) => product.discount === 0 && product.price > 0
        )}
      />
      {/* Categories */}
      <div className='category-section'>
        <div className='listing-heading py-md'>Popular Genres</div>
        <div className='category-container'>
          {categoryList.length ? (
            categoryList.map((category, index) =>
              index < 4 ? (
                <CategoryCard key={category._id} category={category} />
              ) : null
            )
          ) : (
            <div>No Category Found</div>
          )}
        </div>
      </div>
      {/* Horizontal List of Cards */}
      <div className='listing-section mt-md'>
        <ListSection
          title='Games On Sale '
          products={productList.filter((product) => product.discount > 0)}
        />
        <ListSection
          title='Latest Release '
          products={productList.filter(
            (product) => product.discount === 0 && product.price > 0
          )}
        />
        <ListSection
          title='Free to Play '
          products={productList.filter((product) => product.price === 0)}
        />
      </div>
      {/* Footer */}
    </>
  );
};

export default HomePage;
