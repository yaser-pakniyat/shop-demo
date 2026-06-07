import { configureStore } from "@reduxjs/toolkit";
import { GlobalSlice } from "./slices/global";
import offCanvasReducer from "./slices/offCanvas";
import { productsSlice } from "./slices/productsSlice";

export const store = configureStore({
  reducer: {
    global: GlobalSlice.reducer,
    offcanvas: offCanvasReducer,
    products: productsSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
