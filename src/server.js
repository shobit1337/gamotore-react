import { Server, Model, RestSerializer } from 'miragejs';
import {
  loginHandler,
  signupHandler,
  updateUserHandler,
} from './backend/controllers/AuthController';
import {
  addItemToCartHandler,
  clearCartHandler,
  getCartItemsHandler,
  removeItemFromCartHandler,
  setToCartHandler,
  updateCartItemHandler,
} from './backend/controllers/CartController';
import {
  createPublicCartHandler,
  getPublicCartHandler,
} from './backend/controllers/PublicCartController';
import {
  getAllCategoriesHandler,
  getCategoryHandler,
} from './backend/controllers/CategoryController';
import {
  getAllProductsHandler,
  getProductHandler,
} from './backend/controllers/ProductController';
import {
  addItemToWishlistHandler,
  getWishlistItemsHandler,
  removeItemFromWishlistHandler,
  setToWishlistHandler,
} from './backend/controllers/WishlistController';
import { categories } from './backend/db/categories';
import { products } from './backend/db/products';
import { users } from './backend/db/users';
import { publicCart } from './backend/db/publicCart';

export function makeServer({ environment = 'development' } = {}) {
  return new Server({
    serializers: {
      application: RestSerializer,
    },
    environment,
    models: {
      product: Model,
      category: Model,
      publicCart: Model,
      user: Model,
      cart: Model,
      wishlist: Model,
    },

    // Runs on the start of the server
    seeds(server) {
      // disballing console logs from Mirage
      server.logging = false;
      products.forEach((item) => {
        server.create('product', { ...item });
      });

      users.forEach((item) =>
        server.create('user', { ...item, cart: [], wishlist: [], address: [] })
      );

      categories.forEach((item) => server.create('category', { ...item }));
      publicCart.forEach((item) => server.create('publicCart', { ...item }));
    },

    routes() {
      this.passthrough('https://api.imgbb.com/');
      this.namespace = 'api';
      // auth routes (public)
      this.post('/auth/signup', signupHandler.bind(this));
      this.post('/auth/login', loginHandler.bind(this));
      // auth route (private)
      this.post('/auth/update', updateUserHandler.bind(this));

      // products routes (public)
      this.get('/products', getAllProductsHandler.bind(this));
      this.get('/products/:productId', getProductHandler.bind(this));

      // categories routes (public)
      this.get('/categories', getAllCategoriesHandler.bind(this));
      this.get('/categories/:categoryId', getCategoryHandler.bind(this));

      // saved cart routes (public)
      this.get('/cart/:cartId', getPublicCartHandler.bind(this));
      this.post('/cart', createPublicCartHandler.bind(this));

      // cart routes (private)
      this.get('/user/cart', getCartItemsHandler.bind(this));
      this.post('/user/cart', addItemToCartHandler.bind(this));
      this.post('/user/cart/update', setToCartHandler.bind(this));
      this.post('/user/cart/:productId', updateCartItemHandler.bind(this));
      this.delete(
        '/user/cart/:productId',
        removeItemFromCartHandler.bind(this)
      );
      this.delete('/user/cart/all', clearCartHandler.bind(this));

      // wishlist routes (private)
      this.get('/user/wishlist', getWishlistItemsHandler.bind(this));
      this.post('/user/wishlist/update', setToWishlistHandler.bind(this));
      this.post('/user/wishlist', addItemToWishlistHandler.bind(this));
      this.delete(
        '/user/wishlist/:productId',
        removeItemFromWishlistHandler.bind(this)
      );

      this.passthrough();
      this.passthrough('https://api.imgbb.com/**');
    },
  });
}
