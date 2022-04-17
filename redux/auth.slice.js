import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

 export const loginAction = createAsyncThunk('auth/login', async (user, { getState }) => {
  console.log(user);
    const res = await  axios.post('http://localhost:5000/auth/login', user);
    return res.data.accessToken;
});
export const signupAction = createAsyncThunk('auth/signup', async (user, { getState }) => {
    const res = await  axios.post('http://localhost:5000/auth/signup', user);
    return res.data.accessToken;
});


const authSlice = createSlice({
  name: 'auth',
  initialState: {
    accessToken: ""
  },
  extraReducers: (builder) => {
    builder.addCase(loginAction.fulfilled, (state, action) => {
      state.accessToken = action.payload;
    });
    builder.addCase(signupAction.fulfilled, (state, action) => {
      state.accessToken = action.payload;
    });
  },
  reducers: {
    logout: (state) => {
      state.accessToken = "";
    }
  }
});
export default authSlice.reducer;
export const {   logout } = authSlice.actions