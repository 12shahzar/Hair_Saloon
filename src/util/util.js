// utils/confirmItem.js

import { addToCart } from "@/redux/slices/cartSlices";


export const confirmItem = (dispatch, item , page) => {
   if (item) {
    const newItem = {
      ...item,
      uniqueId: `${page}_${item.id}`, // e.g. "page1_1"
    };
    dispatch(addToCart(newItem));
    console.log("Item confirmed:", newItem);
  }
};
