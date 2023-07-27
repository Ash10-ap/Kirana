import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
     
      state.push(action.payload);
      console.log("in actions", action.payload);
    },
    removeFromCart(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    deleteFromcart(state, action) {
      return [];
    },
  },
});

console.log(cartSlice);

export default cartSlice.reducer;
export const { addToCart, removeFromCart, deleteFromcart } = cartSlice.actions;
// console.log(carts);
