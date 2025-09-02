// utils/confirmItem.js
import { addToCart } from "@/redux/slices/cartSlices";

export const confirmItem = (dispatch, item, page) => {
  if (item) {
    const newItem = {
      ...item,
      uniqueId: `${page}_${item.id}_${Date.now()}`, 
      // Example: "hairline_5_1693746359271"
    };
    dispatch(addToCart(newItem));
    console.log("Item confirmed:", newItem);
  }
};
