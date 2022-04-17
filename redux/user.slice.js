import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getProfile = createAsyncThunk(
  "user/getProfile",
  async (arg, { getState }) => {
    const res = await axios.get("http://localhost:5000/user/userId", {
      headers: {
        Authorization: `Bearer ${getState().auth.accessToken}`,
      },
    });
    return res.data;
  }
);
export const updateProfile = createAsyncThunk(
  "user/",
  async (arg, { getState }) => {
    const res = await axios.patch(
      "http://localhost:5000/user/",
      arg,
      {
        headers: {
          Authorization: `Bearer ${getState().auth.accessToken}`,
        },
      }
    );
    return res.data;
  }
);
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      userId: "",
      name: "",
      email: "",
      address_1: "",
      address_2: "",
      pincode: "",
      city: "",
      state: "",
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProfile.fulfilled, (state, action) => {
      console.log(action.payload);
      state.user = action.payload;
    });
    builder.addCase(updateProfile.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  }
})
export default userSlice.reducer;
