import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
export const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    saveProducts: (state, action) => {
      return action.payload;
    },
  },
});

export const { saveProducts } = ProductsSlice.actions;

export default ProductsSlice.reducer;
