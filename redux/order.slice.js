import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
export const getOrders = createAsyncThunk('order/getOrders', async (product, { getState }) => {
   const res = await axios.get('http://localhost:5000/order/user', {
      headers: {
          Authorization: `Bearer ${getState().auth.accessToken}`,
      },

});
return res.data;
});

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    order: [],
  },
  // reducers: {
  //   addToOrder: (state, action) => {
  //     state.push(action.payload);
  //   },
extraReducers:  
  (builder) => {
    builder.addCase(getOrders.fulfilled, (state, action) => {
      state.order  = action.payload;
    });
  },});
  export default orderSlice.reducer;