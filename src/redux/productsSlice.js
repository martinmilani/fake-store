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
  extraReducers(builder) {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = "success";
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.error.message;
      });
  },
});

export default producstsSlice.reducer;
