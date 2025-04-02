import { createSlice } from "@reduxjs/toolkit";

interface OffcanvasState {
  isOpen: boolean;
}

export const OffCanvasSlice = createSlice({
  name: "offcanvas",
  initialState: { isOpen: false } as OffcanvasState,
  reducers: {
    openOffcanvas: (state) => {
      state.isOpen = true;
    },
    closeOffcanvas: (state) => {
      state.isOpen = false;
    },
  },
});
export default OffCanvasSlice.reducer;
export const { openOffcanvas, closeOffcanvas } = OffCanvasSlice.actions;
