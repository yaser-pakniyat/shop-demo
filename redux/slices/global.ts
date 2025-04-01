import { createSlice } from "@reduxjs/toolkit";

interface GlobalState {
  theme: "light" | "dark";
}
// const initialState: GlobalState = {
//   theme: "light",
// };

export const GlobalSlice = createSlice({
  name: "global",
  initialState: { theme: "light" } as GlobalState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export default GlobalSlice.reducer;
export const { toggleTheme } = GlobalSlice.actions;
