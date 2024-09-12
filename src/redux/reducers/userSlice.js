import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const authProfile = createAsyncThunk("auth/user", async(USER) => {
  try {

    const response = await axios.post("https://api.escuelajs.co/api/v1/auth/login", USER)
    console.log(response.data);
    return response.data;
  } catch (err) {
    throw new Error("Failed to fetch user");
  }
});


const initialState = {
  user: {
  },
  status: "idle",
  error: null,
};

export const authSlice = createSlice({
    name: "Authorization",
    initialState,
    extraReducers:(builder)=> {
        builder.addCase(authProfile.pending,  (state)=>{
            state.status = "loading"
        })
        builder.addCase(authProfile.fulfilled,  (state, action)=>{
            state.status = "success"
            state.user = action.payload
        })
        builder.addCase(authProfile.rejected,  (state, action)=>{
            state.status = "failed"
            state.error = action.error.message
        })
    }
})

export default authSlice.reducer;