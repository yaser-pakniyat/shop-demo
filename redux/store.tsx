import { configureStore } from "@reduxjs/toolkit";
import { GlobalSlice } from "./slices/global";

export const store = configureStore({
  reducer: { global: GlobalSlice.reducer },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
