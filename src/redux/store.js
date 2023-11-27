// const {configureStore} = require('@reduxjs/toolkit');
// import configureStore from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';

import ProductReducer from './slices/ProductsSlice';
import WishlistReducer from './slices/WishlistSlice';
import CartReducer from './slices/CartSlice';
import OrderReducer from './slices/OrderSlice';
export const store = configureStore({
  reducer: {
    product: ProductReducer,
    wishlist: WishlistReducer,
    cart: CartReducer,
    order: OrderReducer,
  },
});
