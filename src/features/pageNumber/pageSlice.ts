import { createSlice } from "@reduxjs/toolkit";

export interface pageState {
    pageValue: number
  }
const initialState:pageState={
    pageValue:1
}

export const pageSlice = createSlice({
    name: 'pageValue',
    initialState,
    reducers: {
      increment: (state) => {
    
        state.pageValue += 1
      },
      decrement: (state) => {
        state.pageValue -= 1
      }
    
    }
  })
  export const {increment,decrement} = pageSlice.actions
  export default pageSlice.reducer;
  