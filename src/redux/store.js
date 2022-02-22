import {configureStore} from "@reduxjs/toolkit";

import productstReducer from "./productsSlice";
import productReducer from "./productSlice";
import basketReducer from "./basketSlice";
import userReducer from "./userSlice";
const store = configureStore({
  reducer: {
    products: productstReducer,
    product: productReducer,
    basket: basketReducer,
    user: userReducer,
  },
});

export default store;
