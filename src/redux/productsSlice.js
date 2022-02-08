import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import axiosInstance from "../services/apiService";

export const getProducts = createAsyncThunk("products/getProducts", async () => {
  const response = await axiosInstance.get("/products");
  const {data} = response;

  return data;
});

export const producstsSlice = createSlice({
  name: "products list",
  initialState: {
    products: [],
    status: "idle",
    error: null,
  },
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.status = "loading";
    },
    [getProducts.fulfilled]: (state, action) => {
      state.status = "success";
      state.products = action.payload;
    },
    [getProducts.rejected]: (state, payload) => {
      state.status = "failed";
      state.error = payload.error.message;
    },
  },
});

export default producstsSlice.reducer;
