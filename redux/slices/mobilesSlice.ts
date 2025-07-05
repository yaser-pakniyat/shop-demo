import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { MobileState } from "@/types/mobileTypes";

const initialState: MobileState = {
  mobiles: [],
  pending: false,
  error: null,
};

export const fetchMobiles = createAsyncThunk(
  "mobiles/fetchMobilesStatus",
  async () => {
    const res = await fetch("/db.json");
    const data = await res.json();
    return data.mobiles;
  },
);

export const MobilesSlice = createSlice({
  name: "mobiles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMobiles.pending, (state, action) => {
      state.pending = true;
      state.error = null;
    });

    builder.addCase(fetchMobiles.fulfilled, (state, action) => {
      state.mobiles = action.payload;
      state.pending = false;
    });

    builder.addCase(fetchMobiles.rejected, (state, action) => {
      state.pending = false;
      state.error = action.error.message || "Error in retrieving images";
    });
  },
});

export default MobilesSlice.reducer;