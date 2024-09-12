import { configureStore } from "@reduxjs/toolkit";
import { postsSlice,  authSlice } from "./reducers";


export const store = configureStore({
    reducer: {
        posts: postsSlice,
        auth: authSlice,
    },
    
})