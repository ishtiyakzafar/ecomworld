import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import ShortUniqueId from 'short-unique-id';
const uid = new ShortUniqueId();

const initialState = {
  cart: JSON.parse(localStorage.getItem('cart')) || [],
  wishlist: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    actionSetCart(state, action) {
      state.cart = action.payload.map((item) => ({ product: item.productId, _id: item._id, quantity: item.quantity, size: item.size }));
    },

    actionAddToCart(state, action) {
      const { product, size } = action.payload;

      const index = state.cart.findIndex((item) => item.product._id === product._id && item.size === size);

      if (index === -1) {
        state.cart = [{ _id: uid(), product, quantity: 1, size }, ...state.cart];
      } else {
        if (state.cart[index].product.size.find((item) => item.name === size).quantity > state.cart[index].quantity) {
          state.cart[index].quantity += 1;
        } else {
          toast.error('You have already added the maximum quantity to cart');
        }
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
    },

    actionSetWishlist(state, action) {
      state.wishlist = action.payload;
    },

    actionAddToWishlist(state, action) {
      state.wishlist = [action.payload, ...state.wishlist];
    },

    actionRemoveFromWishlist(state, action) {
      state.wishlist = state.wishlist.filter((item) => item._id !== action.payload);;
    },

    actionMoveToCart(state, action) {
      state.wishlist = action.payload;
    },
  }
})

export const {
  actionSetCart,
  actionAddToCart,
  actionRemoveFromCart,
  actionIncQty,
  actionDecQty,
  actionSetWishlist,
  actionAddToWishlist,
  actionRemoveFromWishlist,
  actionMoveToCart,
} = productSlice.actions;
export default productSlice.reducer;