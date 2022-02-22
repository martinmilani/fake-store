import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import axiosInstance from "../services/apiService";

export const getProduct = createAsyncThunk("products/getProduct", async (id) => {
  const response = await axiosInstance.get(`/products/${id}`);
  const {data} = response;

  return data;
});

const initState = {
  product: {},
  status: "idle",
  error: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState: initState,
  extraReducers(builder) {
    builder
      .addCase(getProduct.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.status = "success";
        state.product = action.payload;
      })
      .addCase(getProduct.rejected, (state, payload) => {
        state.status = "failed";
        state.error = payload.error.message;
      });
  },
  reducers: {
    resetStatus: () => initState,
  },
});

export const {resetStatus} = productSlice.actions;
export default productSlice.reducer;
