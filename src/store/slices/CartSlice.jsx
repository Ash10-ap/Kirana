import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState:[],
    reducers : {
      addToCart(state, action){
          state.push(action.payload);
          console.log("in actions",state.length);
          
          // count = count + state.length
      },
      removeFromCart(state, action){

      },
      deleteFromcart(state, action){

      }
    }
});

console.log(cartSlice);

export default cartSlice.reducer;
export const {addToCart, removeFromCart}  = cartSlice.actions;
// console.log(carts);

