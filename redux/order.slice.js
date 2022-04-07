import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
const addToOrder = createAsyncThunk('order/addToOrder', async (product, { getState }) => {
    const state = getState();
    const order = state.order;
    const newOrder = [...order.products, product];
    return { products: newOrder };
});

const orderSlice = createSlice({
  name: 'order',
  initialState: [],
  // reducers: {
  //   addToOrder: (state, action) => {
  //     state.push(action.payload);
  //   },
extraReducers:  
  (builder) => {
    builder.addCase(addToOrder.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },});
  export default orderSlice.reducer;