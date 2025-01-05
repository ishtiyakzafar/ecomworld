import { createSlice } from "@reduxjs/toolkit";
import ShortUniqueId from 'short-unique-id';
const uid = new ShortUniqueId();

const initialState = {
  cart: JSON.parse(localStorage.getItem('cart')) || [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    actionSetCart(state, action) {
      state.cart = action.payload.map((item) => ({ product: item.productId, ...item }));
    },

    actionAddToCart(state, action) {
      const { product, size } = action.payload;

      const index = state.cart.findIndex((item) => item.product._id === product._id && item.size === size);

      if (index === -1) {
        state.cart = [{ _id: uid(), product, quantity: 1, size }, ...state.cart];
      } else {
        state.cart[index].quantity += 1;
      }

      if (!JSON.parse(localStorage.getItem('user'))) {
        localStorage.setItem('cart', JSON.stringify(state.cart));
      }
    },

    actionRemoveFromCart(state, action) {
      state.cart = state.cart.filter((item) => item._id !== action.payload);

      if (!JSON.parse(localStorage.getItem('user'))) {
        localStorage.setItem('cart', JSON.stringify(state.cart));
      }
    },

    actionIncQty(state, action) {
      const index = state.cart.findIndex((item) => item._id === action.payload);
      state.cart[index].quantity += 1;

      if (!JSON.parse(localStorage.getItem('user'))) {
        localStorage.setItem('cart', JSON.stringify(state.cart));
      }
    },

    actionDecQty(state, action) {
      const index = state.cart.findIndex((item) => item._id === action.payload);
      state.cart[index].quantity -= 1;

      if (!JSON.parse(localStorage.getItem('user'))) {
        localStorage.setItem('cart', JSON.stringify(state.cart));
      }
    }
  }
})

export const {
  actionSetCart,
  actionAddToCart,
  actionRemoveFromCart,
  actionIncQty,
  actionDecQty,
} = productSlice.actions;
export default productSlice.reducer;