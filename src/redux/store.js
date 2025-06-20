import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlices';

export const store = configureStore({
  reducer: {
    wigCart: cartReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
