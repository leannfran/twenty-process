// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    // Agrega otros reducers aquí si los tienes
  },
});

export default store;
