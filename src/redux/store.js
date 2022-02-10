import {configureStore} from "@reduxjs/toolkit";

import productstReducer from "./productsSlice";
import productReducer from "./productSlice";
import basketReducer from "./basketSlice";
const store = configureStore({
  reducer: {
    products: productstReducer,
    product: productReducer,
    basket: basketReducer,
  },
});

export default store;
