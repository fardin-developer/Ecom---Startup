import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

export interface SearchState {
    searchValue: string
  }

  const initialState: SearchState = {
      searchValue: ""
  };
  
const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        update:(state,action: PayloadAction<string>) => {
            state.searchValue= action.payload
        }
    }
});

export const {update} = searchSlice.actions
export default searchSlice.reducer