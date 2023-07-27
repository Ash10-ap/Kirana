// import { configureStore } from "@reduxjs/toolkit";
// import cartSlice  from "./slices/CartSlice";

// const store = configureStore({
//   reducer : {
//     carts : cartSlice
//   }
// });

// export default store;

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage
import cartSlice from "./slices/CartSlice";

// Configuration for Redux Persist
const persistConfig = {
  key: "root",
  storage,
};

const reducer =  combineReducers({
   carts : cartSlice
})

const persistRed = persistReducer(persistConfig, reducer)

const store = configureStore({
  reducer : persistRed
});

export default store;
