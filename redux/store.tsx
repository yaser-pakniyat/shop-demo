import { configureStore } from "@reduxjs/toolkit";
import { GlobalSlice } from "./slices/global";
import offCanvasReducer from "./slices/offCanvas";

export const store = configureStore({
  reducer: { global: GlobalSlice.reducer, offcanvas: offCanvasReducer },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
