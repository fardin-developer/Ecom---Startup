import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../features/search/searchSlice';
import pageNumberReducer from '../features/pageNumber/pageSlice';
import cartNumberReducer from '../features/cart/cartSlice';


export const store = configureStore({
  reducer: {
      search:searchReducer,
      pageNumber :pageNumberReducer,
      cartNumber:cartNumberReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch