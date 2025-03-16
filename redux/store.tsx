import { configureStore } from "@reduxjs/toolkit";
import { GlobalSlice } from "./slices/global";

export const store = configureStore({
  reducer: { global: GlobalSlice.reducer },
});
export default store;
