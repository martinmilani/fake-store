import {configureStore} from "@reduxjs/toolkit";

import productstReducer from "./productsSlice";
import productReducer from "./productSlice";

const store = configureStore({
  reducer: {
    products: productstReducer,
    product: productReducer,
  },
});

export default store;
