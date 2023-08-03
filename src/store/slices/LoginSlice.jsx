import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name : 'loginName',
  initialState: '',
  reducers:{
    addUserName(state,action){
      // console.log(state);
     state = action.payload;
     console.log(state);
     return state;
    },
    logout(state,action){
      state = "";
      return state;
    }
  }
})

export default loginSlice.reducer;
export const {addUserName, logout} = loginSlice.actions;