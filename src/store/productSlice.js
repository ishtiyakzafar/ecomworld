import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: JSON.parse(localStorage.getItem('wishlist')) || [],
  cart: JSON.parse(localStorage.getItem('cart')) || [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {

    actionAddToWishlist(state, action) {
      if (!state.wishlist.some((item) => item._id === action.payload._id)) {
        state.wishlist = [action.payload, ...state.wishlist];
        localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
      }
    },

    actionRemoveFromWishlist(state, action) {
      state.wishlist = state.wishlist.filter((item) => item._id !== action.payload);;
      localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
    },

    actionAddToCart(state, action) {
      if (!state.cart.some((item) => item._id === action.payload._id)) {
        state.cart = [action.payload, ...state.cart];
        localStorage.setItem('cart', JSON.stringify(state.cart));
      }
    },

    actionRemoveFromCart(state, action) {
      state.cart = state.cart.filter((item) => item._id !== action.payload);;
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },

    actionDeleteWishlist(state, action) {
      state.wishlist = state.wishlist.filter((item) => item._id !== action.payload);
    },
    actionUpdateWishlist(state, action) {
      const index = state.wishlist.findIndex((item) => item._id === action.payload._id);
      state.wishlist[index] = action.payload;
    }
  }
})

export const {
  actionAddToWishlist,
  actionRemoveFromWishlist,
  actionAddToCart,
  actionRemoveFromCart,
  actionDeleteWishlist,
  actionUpdateWishlist,
} = productSlice.actions;
export default productSlice.reducer;