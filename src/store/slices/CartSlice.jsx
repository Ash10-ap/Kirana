import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      const newItem = { ...action.payload, quantity: 1 };

      if (state.length === 0) {
        state.push(newItem);
      } else {
        const existingElement = state.findIndex((ele) => ele.id === newItem.id);
        if (existingElement === -1) {
          state.push(newItem);
        } else {
          state[existingElement].quantity = state[existingElement].quantity + 1;
        }
      }

      console.log("in actions", newItem);
    },
    removeFromCart(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    deleteFromcart(state, action) {
      return [];
    },

    increaseTheQuantity(state, action) {
      const item = state.find((item) => item.id === action.payload.i);
      if (item && item.quantity >= 1) {
        item.quantity = item.quantity + 1;
      }
    },

    decreaseTheQuantity(state, action) {
      const item = state.find((item) => item.id === action.payload.i);
      if (item && item.quantity > 1) {
        item.quantity = item.quantity - 1;
      }
    },
  },
});

console.log(cartSlice);

export default cartSlice.reducer;
export const {
  addToCart,
  removeFromCart,
  deleteFromcart,
  increaseTheQuantity,
  decreaseTheQuantity,
} = cartSlice.actions;
// console.log(carts);
