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
            <div className='product-heading'>PLAY AS A MERCENARY OUTLAW</div>
            <div className='product-description'>
              Become a cyberpunk, an urban mercenary equipped with cybernetic
              enhancements and build your legend on the streets of Night City.
            </div>
            <div className='product-heading'>
              EXPLORE THE CITY OF THE FUTURE
            </div>
            <div className='product-description'>
              Night City is packed to the brim with things to do, places to see,
              and people to meet. And it’s up to you where to go, when to go,
              and how to get there.
            </div>
            <div className='product-heading'>BUILD YOUR LEGEND</div>
            <div className='product-description'>
              Go on daring adventures and build relationships with unforgettable
              characters whose fates are shaped by the choices you make.
            </div>
            <div className='product-heading'>EQUIPPED WITH IMPROVEMENTS</div>
            <div className='product-description'>
              Experience Cyberpunk 2077 with a host of changes and improvements
              to gameplay and economy, the city, map usage, and more.
            </div>
            <div className='product-heading'>
              INCLUDES FREE ADDITIONAL CONTENT
            </div>
            <div className='product-description'>
              Get your hands on a haul of free items including new guns and
              melee weapons, as well as extra customization options and more.
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
