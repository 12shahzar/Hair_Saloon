import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlices = createSlice({
  name: 'wigCart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const exists = state.items.some(item => item.id === newItem.id);
      if (!exists) {
        state.items.push(newItem);
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlices.actions;
export default cartSlices.reducer;
