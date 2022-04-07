import axios from "axios";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const getCart = createAsyncThunk(
  "cart/getCart",
  async (arg, { getState }) => {
    const res = await axios.get("https://nestjs-e-back.herokuapp.com/cart/user", {
      headers: {
        Authorization: `Bearer ${getState().auth.accessToken}`,
      },
    });
    return res.data;
  }
);

export const incrementQuantity = createAsyncThunk(
  "cart/incrementQuantity",
  async (id, { getState }) => {
    await axios.patch(
      "https://nestjs-e-back.herokuapp.com/cart/increment/" + id,
      {},
      {
        headers: {
          Authorization: `Bearer ${getState().auth.accessToken}`,
        },
      }
    );
    const res = await axios.get("https://nestjs-e-back.herokuapp.com/cart/user", {
      headers: {
        Authorization: `Bearer ${getState().auth.accessToken}`,
      },
    });
    return res.data;
  }
);
export const decrementQuantity = createAsyncThunk(
  "cart/decrementQuantity",
  async (id, { getState }) => {
    await axios.patch(
      "https://nestjs-e-back.herokuapp.com/cart/decrement/" + id,
      {},
      {
        headers: {
          Authorization: `Bearer ${getState().auth.accessToken}`,
        },
      }
    );

    const res = await axios.get("https://nestjs-e-back.herokuapp.com/cart/user", {
      headers: {
        Authorization: `Bearer ${getState().auth.accessToken}`,
      },
    });
    return res.data;
  }
);
export const removeFromCart = createAsyncThunk(
  "cart/removeProduct",
  async (id, { getState }) => {
    await axios.delete("https://nestjs-e-back.herokuapp.com/cart/" + id, {
      headers: {
        Authorization: `Bearer ${getState().auth.accessToken}`,
      },
    });
    const res = await axios.get("https://nestjs-e-back.herokuapp.com/cart/user", {
      headers: {
        Authorization: `Bearer ${getState().auth.accessToken}`,
      },
    });
    return res.data;
  }
);
export const addToCart = createAsyncThunk(
  "cart/addProduct",
  async (product, { getState }) => {
    await axios.post(
      "https://nestjs-e-back.herokuapp.com/cart/",
      { ...product, quantity: 1 },
      {
        headers: {
          Authorization: `Bearer ${getState().auth.accessToken}`,
        },
      }
    );
    const res = await axios.get("https://nestjs-e-back.herokuapp.com/cart/user", {
      headers: {
        Authorization: `Bearer ${getState().auth.accessToken}`,
      },
    });
    return res.data;
  }
);
export const addCustomProduct = createAsyncThunk(
  "cart/addCustomProduct",
  async (product, { getState }) => {
    await axios.post(
      "https://nestjs-e-back.herokuapp.com/cart/custom",
      { ...product, quantity: 1 },
      {
        headers: {
          Authorization: `Bearer ${getState().auth.accessToken}`,
        },
      }
    );
    const res = await axios.get("https://nestjs-e-back.herokuapp.com/cart/user", {
      headers: {
        Authorization: `Bearer ${getState().auth.accessToken}`,
      },
    });
    return res.data;
  }
);


const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  // reducers: {},
  extraReducers: (builder) => {
    builder.addCase(incrementQuantity.fulfilled, (state, action) => {
      console.log(action.payload);
      state.cart = action.payload;
    });
    builder.addCase(decrementQuantity.fulfilled, (state, action) => {
      state.cart = action.payload;
    });
    builder.addCase(removeFromCart.fulfilled, (state, action) => {
      state.cart = action.payload;
    });
    builder.addCase(addToCart.fulfilled, (state, action) => {
      const itemExists = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemExists) {
        itemExists.quantity++;
      } else {
        state.cart = action.payload;
      }
    });
    builder.addCase(getCart.fulfilled, (state, action) => {
      state.cart = action.payload;
    });
    builder.addCase(addCustomProduct.fulfilled, (state, action) => {
      state.cart = action.payload;
    });
  },
});

export default cartSlice.reducer;
