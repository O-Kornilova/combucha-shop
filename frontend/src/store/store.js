import { configureStore } from "@reduxjs/toolkit";
// import productsReducer from "./productsSlice";
// import filtersReducer from "./filtersSlice";
import cartReducer from "./slices/cart/slice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// import { configureStore } from '@reduxjs/toolkit'
// import productsReducer from './productsSlice'
// import cartReducer from './cartSlice'
// import filtersReducer from './filtersSlice'

// export const store = configureStore({
//   reducer: {
//     products: productsReducer,
//     // cart: cartReducer,
//     filters: filtersReducer
//   }
// })
