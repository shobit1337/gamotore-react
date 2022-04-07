import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CartCard } from '../../components';
import { useAuth } from '../../context/auth-context';
import { useShop } from '../../context/shop-context';
import { createPublicCart } from '../../utils/cart';
import { CartSummary } from './components';

const CartPage = () => {
  const {
    shop: {
      cart: { cartItems, totalQuantity },
    },
    clearCart,
  } = useShop();

  const navigate = useNavigate();

  const {
    user: { encodedToken },
  } = useAuth();

  const handleCreateCart = async () => {
    const cart = await createPublicCart(cartItems);
    // TODO: Open Model to copy the link
    if (cart) navigate(`/cart/${cart._id}`);
  };

  return (
    <>
      <h4 className='cart-title border-top pt-sm d-flex justify-between items-center gap-xs'>
        My Cart {`( ${totalQuantity} Items )`}
      </h4>

      {/* Cart Container */}
      <div className='product-container'>
        <div className='cart-page-details'>
          <div className='d-flex justify-between items-center'>
            {!!cartItems.length ? (
              <>
                {' '}
                <button
                  className='text-sm btn btn-xs btn-outlined btn-rounded btn-light text-light d-flex flex-center gap-xs'
                  onClick={() => clearCart(encodedToken)}>
                  Empty Cart<i className='fab fa-dropbox'></i>
                </button>
                <button
                  className='text-sm btn btn-xs btn-outlined btn-rounded btn-light text-light d-flex flex-center gap-xs'
                  onClick={handleCreateCart}>
                  SHARE CART<i className='fas fa-share-alt'></i>
                </button>
              </>
            ) : null}
          </div>

          {/* Cart Items */}
          {cartItems.length
            ? cartItems.map((item) => <CartCard key={item._id} cart={item} />)
            : null}
        </div>

        {/* Cart Summary */}
        <CartSummary />
      </div>
    </>
  );
};

export default CartPage;
