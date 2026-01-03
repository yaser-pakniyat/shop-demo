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
});
