import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/features/counter/CounterSlice";
import productReducers from "../redux/features/product/ProductSlice";
import { apiSlice } from "./api/apiSlice";
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    counter: counterReducer,
    product: productReducers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
