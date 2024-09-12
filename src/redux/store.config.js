import { configureStore } from "@reduxjs/toolkit";
import { postsSlice } from "./reducers";

export const store = configureStore({
    reducer: {
        posts: postsSlice,
    },
    
})