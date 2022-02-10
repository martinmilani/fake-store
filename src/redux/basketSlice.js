import {createSlice} from "@reduxjs/toolkit";

const initState = {
  basket: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState: initState,
  reducers: {
    addToBasket: (state, {payload}) => {
      const item = state.basket.find((product) => product.id === payload.id);

      if (item) {
        item.quantity += 1;
      } else {
        state = state.basket.push(payload);
      }
    },
    deleteFromBasket: (state, {payload}) => {
      const filtredArray = state.basket.filter((item) => item.id !== payload.id);

      state.basket = filtredArray;
    },
  },
});

export const getTotalQuantity = (state) => {
  return state.basket.basket.reduce((total, basketItem) => {
    return basketItem.quantity + total;
  }, 0);
};
export const getTotalAmount = (state) => {
  return state.basket.basket.reduce((total, basketItem) => {
    return Number((basketItem.quantity * basketItem.price + total).toFixed(2));
  }, 0);
};
export const {addToBasket, deleteFromBasket} = basketSlice.actions;
export default basketSlice.reducer;
