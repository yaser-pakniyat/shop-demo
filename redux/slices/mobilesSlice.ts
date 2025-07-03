import { createAsyncThunk } from "@reduxjs/toolkit";
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
