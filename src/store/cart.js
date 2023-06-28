import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShow: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    toggle(state) {
      state.isShow = !state.isShow;
    },
  },
});

export default cartSlice;
export const cartSliceActions = cartSlice.actions;