import { createSlice } from "@reduxjs/toolkit";

const initialCart = {
  content: [
    {
      itemName: "Test",
      px: 6,
      qty: 3,
    },
  ],
  totalqty:3
};

const cartContentSlice = createSlice({
  name: "cartContent",
  initialState: initialCart,
  reducers: {
    addCart(state, action) {
      for (let item of state.content) {
        if (item.itemName === action.payload.itemname) {
          item.qty++;
          state.totalqty++;
          return;
        }
      }
      state.content.push({
        itemName: action.payload.itemname,
        px: action.payload.px,
        qty: 1,
      });
      state.totalqty++;
    },
    addQty(state, action) {
      for (let item of state.content) {
        if (item.itemName === action.payload.itemname) {
          item.qty++;
          state.totalqty++;
        }
      }
    },
    minusQty(state, action) {
      for (let i = 0; i < state.content.length; i++) {
        if (state.content[i].itemName === action.payload.itemname) {
          if (state.content[i].qty > 1) state.content[i].qty--;
          else state.content.splice(i, 1);
          state.totalqty--;
        }
      }
    },
    removeCart(state, action) {
      let ind = 0;
      for (let i = 0; i < state.content.length(); i++) {
        if (state.content[i].itemName === action.payload.name) {
          ind = i;
        }
      }
      state.totalqty-=state.content[ind].qty;
      state.content.splice(ind, 1);
    },
  },
});

export default cartContentSlice;
export const cartContentActions = cartContentSlice.actions;
