import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Loader } from '../../components';
import { getProduct } from '../../utils/products';
import { ProductDetails, ProductShowcase } from './components';

const ProductPage = () => {
  const [productDetails, setProductDetails] = useState(null);
  const { productId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (productId) {
      (async () => {
        const data = await getProduct(productId);
        if (data) {
          setProductDetails(data);
        }
      })();
    } else {
      navigate('/');
    }

    return () => {
      setProductDetails(null);
    };
  }, [productId, navigate]);

  return productDetails ? (
    <>
      <h1 className='product-title border-top py-sm'>{productDetails.title}</h1>
      <div className='product-nav'>
        <a href='/'>Overview</a>
        <a href='/'>Achievements</a>
      </div>
      <div className='product-container'>
        <div className='product-page-details'>
          <ProductShowcase images={productDetails.largeImages} />
          {/* Product Description */}
          <>
            <div className='d-flex gap-md my-sm'>
              <span>
                <div className='text-dark-light'>Genres</div>
                {productDetails.categoryName.map((category, index) => (
                  <span className='cursor-pointer pr-xxs pt-xxs' key={index}>
                    {category}
                  </span>
                ))}
              </span>
              <span>
                <div className='text-dark-light'>Features</div>
                <span className='cursor-pointer pr-xxs pt-xxs'>
                  Controller Support
                </span>

                <span className='cursor-pointer pr-xxs pt-xxs'>
                  Single Player
                </span>
              </span>
            </div>
            <div className='product-heading'>{productDetails.title}</div>
            <div className='product-description'>
              {productDetails.description}
            </div>
          </>
        </div>
        <ProductDetails product={productDetails} />
      </div>
    </>
  ) : (
    <Loader />
  );
};

export default ProductPage;
