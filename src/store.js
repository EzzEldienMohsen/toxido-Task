import { configureStore } from '@reduxjs/toolkit';
import CartReducer from './features/cart/CartSlice';

export var store = configureStore({
  reducer: {
    cart: CartReducer,
  },
});
