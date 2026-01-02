import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductsState } from "@/types/productTypes";

const initialState: ProductsState = {
  products: [],
  pending: false,
  error: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});
