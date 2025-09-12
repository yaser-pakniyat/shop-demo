import { configureStore } from "@reduxjs/toolkit";
import { GlobalSlice } from "./slices/global";
import offCanvasReducer from "./slices/offCanvas";
import mobileReducer from "@/redux/slices/mobilesSlice";

export const store = configureStore({
  reducer: {
    global: GlobalSlice.reducer,
    offcanvas: offCanvasReducer,
    mobiles: mobileReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
