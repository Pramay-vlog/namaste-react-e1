import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => action.payload.id === item.id
      );
      if (itemIndex === -1) {
        state.items.push({ ...action.payload, quantity: 1 });
      } else {
        state.items[itemIndex].quantity += 1;
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    clearCart: (state) => {
      state.items.length = 0; // []
    },
  },
});

export const { addItem, clearCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
