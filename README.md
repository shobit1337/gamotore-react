<p align="center">
  <a href="https://gamotore-react.netlify.app/" >
    <img src="https://gamotore.netlify.app/assets/gamotore-logo-dark.svg" alt="gamotore logo" width="200" height="165">
  </a>
</p>

<h3 align="center">Gamotore</h3>

<p align="center">
  <br>
  <a href="https://gamotore-react.netlify.app/"><strong>Try it out now »</strong></a>
  <br>
  <br>
  <a href="https://github.com/shobit1337/gamotore-react/issues">Report bug</a>
  ·
  <a href="https://github.com/shobit1337/gamotore-react/issues">Request feature</a>
</p>

## gamotore

Gamatore is an e-commerce web application, which have listing to various video games titles. It is a full-stack web app with all basic functions we can see in most of the e-commerce web apps, such as: cart, wishlist, listing, profile management, address management, coupon, checkout and lot more.

## Table of contents

- [What's included](#whats-included)
- [Contributing](#running-documentation-locally-and-contributing)
- [Creators](#creator)
- [Thanks](#thanks)
- [license](#license)

## What's included

Within the download you'll find the following directories and files.

<details>
  <summary>Contents</summary>

- 📂 gamotore-react
  - 📄 [LICENSE](LICENSE)
  - 📄 [README.md](README.md)
  - 📄 [node_modules](node_modules)
  - 📄 [package.json](package.json)
  - 📂 **public**
    - 📄 [\_redirects](public/_redirects)
    - 📄 [favicon.ico](public/favicon.ico)
    - 📄 [index.html](public/index.html)
    - 📄 [logo\-dark.png](public/logo-dark.png)
    - 📄 [robots.txt](public/robots.txt)
  - 📂 **src**
    - 📄 [App.jsx](src/App.jsx)
    - 📄 [Routes.jsx](src/Routes.jsx)
    - 📂 **assets**
      - 📄 [404.svg](src/assets/404.svg)
      - 📄 [logo\-dark.svg](src/assets/logo-dark.svg)
      - 📄 [logo\-light.svg](src/assets/logo-light.svg)
    - 📂 **backend**
      - 📂 **controllers**
        - 📄 [AuthController.js](src/backend/controllers/AuthController.js)
        - 📄 [CartController.js](src/backend/controllers/CartController.js)
        - 📄 [CategoryController.js](src/backend/controllers/CategoryController.js)
        - 📄 [CouponController.js](src/backend/controllers/CouponController.js)
        - 📄 [ProductController.js](src/backend/controllers/ProductController.js)
        - 📄 [PublicCartController.js](src/backend/controllers/PublicCartController.js)
        - 📄 [WishlistController.js](src/backend/controllers/WishlistController.js)
      - 📂 **db**
        - 📄 [categories.js](src/backend/db/categories.js)
        - 📄 [coupons.js](src/backend/db/coupons.js)
        - 📄 [products.js](src/backend/db/products.js)
        - 📄 [publicCart.js](src/backend/db/publicCart.js)
        - 📄 [users.js](src/backend/db/users.js)
      - 📂 **utils**
        - 📄 [authUtils.js](src/backend/utils/authUtils.js)
    - 📂 **components**
      - 📂 **AuthRoute**
        - 📄 [AuthRoute.jsx](src/components/AuthRoute/AuthRoute.jsx)
      - 📂 **Card**
        - 📄 [CartCard.jsx](src/components/Card/CartCard.jsx)
        - 📄 [CategoryCard.jsx](src/components/Card/CategoryCard.jsx)
        - 📄 [ProductCard.jsx](src/components/Card/ProductCard.jsx)
        - 📄 [PublicCartCard.jsx](src/components/Card/PublicCartCard.jsx)
        - 📄 [WishlistCard.jsx](src/components/Card/WishlistCard.jsx)
      - 📂 **Filters**
        - 📄 [Filters.css](src/components/Filters/Filters.css)
        - 📄 [Filters.jsx](src/components/Filters/Filters.jsx)
        - 📂 **components**
          - 📂 **ListAccordion**
            - 📄 [ListAccordion.jsx](src/components/Filters/components/ListAccordion/ListAccordion.jsx)
          - 📄 [index.js](src/components/Filters/components/index.js)
      - 📂 **Footer**
        - 📄 [Footer.jsx](src/components/Footer/Footer.jsx)
      - 📂 **Header**
        - 📄 [Header.jsx](src/components/Header/Header.jsx)
      - 📂 **Loader**
        - 📄 [Loader.jsx](src/components/Loader/Loader.jsx)
      - 📂 **Modal**
        - 📄 [Modal.css](src/components/Modal/Modal.css)
        - 📄 [Modal.jsx](src/components/Modal/Modal.jsx)
      - 📂 **Navbar**
        - 📄 [Navbar.jsx](src/components/Navbar/Navbar.jsx)
      - 📂 **PrivateRoute**
        - 📄 [PrivateRoute.jsx](src/components/PrivateRoute/PrivateRoute.jsx)
      - 📂 **SortByDropdown**
        - 📄 [SortByDropdown.css](src/components/SortByDropdown/SortByDropdown.css)
        - 📄 [SortByDropdown.jsx](src/components/SortByDropdown/SortByDropdown.jsx)
      - 📄 [index.js](src/components/index.js)
    - 📂 **context**
      - 📄 [auth\-context.js](src/context/auth-context.js)
      - 📄 [filter\-context.js](src/context/filter-context.js)
      - 📄 [shop\-context.js](src/context/shop-context.js)
    - 📂 **hooks**
      - 📄 [useOnClickOutside.jsx](src/hooks/useOnClickOutside.jsx)
    - 📄 [index.css](src/index.css)
    - 📄 [index.js](src/index.js)
    - 📂 **pages**
      - 📂 **auth**
        - 📄 [ForgetPasswordPage.jsx](src/pages/auth/ForgetPasswordPage.jsx)
        - 📄 [LoginPage.jsx](src/pages/auth/LoginPage.jsx)
        - 📄 [SignupPage.jsx](src/pages/auth/SignupPage.jsx)
      - 📂 **browse\-product**
        - 📄 [BrowseProductPage.jsx](src/pages/browse-product/BrowseProductPage.jsx)
      - 📂 **cart**
        - 📄 [CartPage.jsx](src/pages/cart/CartPage.jsx)
        - 📄 [ShareCartPage.jsx](src/pages/cart/ShareCartPage.jsx)
        - 📂 **components**
          - 📂 **ApplyCoupon**
            - 📄 [ApplyCoupon.jsx](src/pages/cart/components/ApplyCoupon/ApplyCoupon.jsx)
          - 📂 **CartSummary**
            - 📄 [CartSummary.css](src/pages/cart/components/CartSummary/CartSummary.css)
            - 📄 [CartSummary.jsx](src/pages/cart/components/CartSummary/CartSummary.jsx)
          - 📄 [index.js](src/pages/cart/components/index.js)
      - 📂 **checkout**
        - 📄 [CheckoutPage.jsx](src/pages/checkout/CheckoutPage.jsx)
        - 📂 **components**
          - 📂 **AddressManagement**
            - 📄 [AddressManagement.jsx](src/pages/checkout/components/AddressManagement/AddressManagement.jsx)
          - 📂 **OrderSummary**
            - 📄 [OrderSummary.jsx](src/pages/checkout/components/OrderSummary/OrderSummary.jsx)
          - 📄 [index.js](src/pages/checkout/components/index.js)
      - 📂 **error**
        - 📄 [PageNotFound.jsx](src/pages/error/PageNotFound.jsx)
      - 📂 **home**
        - 📄 [HomePage.jsx](src/pages/home/HomePage.jsx)
        - 📂 **components**
          - 📂 **HeroSection**
            - 📄 [HeroSection.jsx](src/pages/home/components/HeroSection/HeroSection.jsx)
          - 📂 **ListSection**
            - 📄 [ListSection.css](src/pages/home/components/ListSection/ListSection.css)
            - 📄 [ListSection.jsx](src/pages/home/components/ListSection/ListSection.jsx)
          - 📄 [index.js](src/pages/home/components/index.js)
      - 📄 [index.js](src/pages/index.js)
      - 📂 **order\-success**
        - 📄 [OrderSuccessPage.css](src/pages/order-success/OrderSuccessPage.css)
      - 📂 **product**
        - 📄 [ProductPage.jsx](src/pages/product/ProductPage.jsx)
        - 📂 **components**
          - 📂 **ProductDetails**
            - 📄 [ProductDetails.jsx](src/pages/product/components/ProductDetails/ProductDetails.jsx)
          - 📂 **ProductShowcase**
            - 📄 [ProductShowcase.css](src/pages/product/components/ProductShowcase/ProductShowcase.css)
            - 📄 [ProductShowcase.jsx](src/pages/product/components/ProductShowcase/ProductShowcase.jsx)
          - 📄 [index.js](src/pages/product/components/index.js)
      - 📂 **profile**
        - 📄 [ProfilePage.jsx](src/pages/profile/ProfilePage.jsx)
      - 📂 **wishlist**
        - 📄 [WishlistPage.jsx](src/pages/wishlist/WishlistPage.jsx)
    - 📄 [server.js](src/server.js)
    - 📂 **store**
      - 📂 **auth**
        - 📄 [action.types.js](src/store/auth/action.types.js)
        - 📄 [actions.js](src/store/auth/actions.js)
        - 📄 [reducer.js](src/store/auth/reducer.js)
      - 📂 **filters**
        - 📄 [action.types.js](src/store/filters/action.types.js)
        - 📄 [actions.js](src/store/filters/actions.js)
        - 📄 [reducer.js](src/store/filters/reducer.js)
      - 📂 **shop**
        - 📄 [action.types.js](src/store/shop/action.types.js)
        - 📄 [actions.js](src/store/shop/actions.js)
        - 📄 [reducer.js](src/store/shop/reducer.js)
    - 📂 **utils**
      - 📂 **cart**
        - 📄 [index.js](src/utils/cart/index.js)
      - 📂 **categories**
        - 📄 [index.js](src/utils/categories/index.js)
      - 📂 **coupons**
        - 📄 [index.js](src/utils/coupons/index.js)
      - 📂 **filters**
        - 📄 [index.js](src/utils/filters/index.js)
      - 📂 **products**
        - 📄 [index.js](src/utils/products/index.js)
  - 📄 [yarn.lock](yarn.lock)

</details>

## Features/ Functionality in Gamotore:

- Home page / Landing Page
- Product listing page
- User Profile Management
- Filter and sort products
- Search product
- Individual product page
- Pagination on listing page
- Wishlist managment
- Cart Managment
- Share your cart (generate cart links)
- Coupon Management
- Address Managment
- Checkout page
- Payment gateway integration
- Order Summary
- Authentication:
  - User Signup
  - User Login

## Running documentation locally and Contributing

- Clone this repo: `git clone https://github.com/shobit1337/gamotore-react.git`
- Run `yarn install`
- To run the project in your local server `yarn start`
- Live server will be started and make changes accordingly.

## **Demo -**

![demo]()

## Creator

**Shobit Deshwal**

- <https://twitter.com/shobit1337>
- <https://github.com/shobit1337>

## Thanks

<a href="https://www.netlify.com/">
  <img src="https://www.netlify.com/v3/img/components/full-logo-light.svg" alt="Netlify" width="147" height="40">
</a>

Thanks to [Netlify](https://www.netlify.com/) for providing us with Deploy Previews!

<a href="https://fontawesome.com/">
  <img src="https://seeklogo.com/images/F/font-awesome-logo-3010FE2434-seeklogo.com.png" alt="fontawesome" width="40" height="40">
</a>

Thanks to [FontAwesome](https://fontawesome.com/) for providing us with Free Icons!

## License

Code released under the MIT Licence.
