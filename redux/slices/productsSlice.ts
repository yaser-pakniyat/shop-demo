import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductsState } from "@/types/productTypes";

const initialState: ProductsState = {
  products: [],
  pending: false,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProductsStatus",
  async () => {
    const res = await fetch("/db.json");
    const data = await res.json();
    return data.products;
  },
);
export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.pending = true;
      state.error = null;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.pending = false;
      state.products = action.payload;
    });
  },
});
