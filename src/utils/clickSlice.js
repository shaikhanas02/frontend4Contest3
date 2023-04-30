import { createSlice } from "@reduxjs/toolkit";
const clickSlice =  createSlice({
  name: "click",
  initialState: {
    data: [],
  },
  reducers: {
    clickData: (state, action) => {
      state.data  = action.payload;
    },
  },
});
export const { clickData } = clickSlice.actions;
export default clickSlice.reducer; 