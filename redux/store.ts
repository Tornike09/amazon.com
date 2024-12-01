import { configureStore } from "@reduxjs/toolkit";
import filterSlice from './slices/filterSlice/filterSlice'
import countrySlice from './slices/countrySlice/countrySlice '
import cartSlice from './slices/cartSlice/cartSlice'

export const store = configureStore({
    reducer: {
        filter: filterSlice,
        country: countrySlice,
        cart: cartSlice
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch