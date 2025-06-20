// utils/confirmItem.js

import { addToCart } from "@/redux/slices/cartSlices";


export const confirmItem = (dispatch, item) => {
  if (item) {
    dispatch(addToCart(item));
    console.log("Item confirmed:", item);
  }
};
