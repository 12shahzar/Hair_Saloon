import {
  color1,
  image1,
  image2,
  image3,
  image4,
  image5,
  image7,
  image8,
} from "@/app/assest";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      id: 3,
      image: image1,
      text: "CAP SIZE",
      small: "M",
      uniqueId: "cap_3",
    },
    {
      id: 5,
      image: image2,
      text: "LENGTH",
      small: "24”",
      uniqueId: "length_5",
    },
    {
      id: 3,
      image: image3,
      text: "DENSITY",
      small: "200%",
      uniqueId: "density_3",
    },
    {
      id: 6,
      image: image4,
      text: "LACE",
      small: "13X6",
      uniqueId: "lace_6",
    },
    {
      id: 1,
      image: image5,
      text: "TEXTURE",
      small: "SILKY",
      uniqueId: "texture_1",
    },
    {
      id: 2,
      image: color1,
      text: "COLOR",
      small: "OFF BLACK",
      uniqueId: "color_2",
    },
    {
      id: 1,
      image: image7,
      text: "HAIRLINE",
      small: "NATURAL",
      uniqueId: "hairline_1",
    },
  ],
};

const cartSlices = createSlice({
  name: "wigCart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;

      // Check if same uniqueId already exists
      const idExists = state.items.some(
        (item) => item.uniqueId === newItem.uniqueId
      );
      if (idExists) {
        return; // Do nothing if same uniqueId already exists
      }

      // Check if same "text" exists (e.g., "CAP SIZE")
      const textIndex = state.items.findIndex(
        (item) => item.text === newItem.text
      );
      if (textIndex !== -1) {
        // Overwrite the old item with same text
        state.items[textIndex] = newItem;
      } else {
        // Else push new item
        state.items.push(newItem);
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.uniqueId !== action.payload
      );
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlices.actions;
export default cartSlices.reducer;
