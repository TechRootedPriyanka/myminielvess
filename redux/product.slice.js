import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getAllProducts  = createAsyncThunk('product/getAllProducts', async () => {
    const response = await fetch('https://nestjs-e-back.herokuapp.com/product');
    const products = await response.json();
    console.log(products);
    return products;
});
export const getProductById = createAsyncThunk('product/getProductById', async (id) => {
    const response = await fetch(`https://nestjs-e-back.herokuapp.com/product/${id}`);
    const product = await response.json();
    return product;
});
export const getProductsByCategory = createAsyncThunk('product/getProductsByCategory', async (category) => {
    const response = await fetch(`https://nestjs-e-back.herokuapp.com/product/category/${category}`);

    console.log(response);
    const products = await response.json();

    return products;
});
const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    product: {},
    bycategory: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(getProductById.fulfilled, (state, action) => {
      state.product = action.payload;
    });
    builder.addCase(getProductsByCategory.fulfilled, (state, action) => {
      state.bycategory = action.payload;
    });
  },
});

export default productSlice.reducer;