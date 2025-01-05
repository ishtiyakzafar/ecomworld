import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import ShortUniqueId from 'short-unique-id';
const uid = new ShortUniqueId();
const isUser = JSON.parse(localStorage.getItem('user'));

const initialState = {
  wishlist: JSON.parse(localStorage.getItem('wishlist')) || [],
  cart: JSON.parse(localStorage.getItem('cart')) || [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    actionSetWishlist(state, action) {
      state.wishlist = action.payload.map((item) => ({ ...item.productId }));
    },

    actionAddToWishlist(state, action) {
      if (!state.wishlist.some((item) => item._id === action.payload._id)) {
        state.wishlist = [action.payload, ...state.wishlist];

        !isUser && localStorage.setItem('wishlist', JSON.stringify(state.wishlist));

        toast.success("Added to wishlist");
      } else {
        toast.error("Already in wishlist");
      }
    },

    actionRemoveFromWishlist(state, action) {
      state.wishlist = state.wishlist.filter((item) => item._id !== action.payload);;
      // localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
      toast.success("Removed from wishlist");
    },

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

      !isUser && localStorage.setItem('cart', JSON.stringify(state.cart));
      toast.success("Item added to cart");
    },

    actionRemoveFromCart(state, action) {
      state.cart = state.cart.filter((item) => item._id !== action.payload);
      !isUser && localStorage.setItem('cart', JSON.stringify(state.cart));
    },

    actionAddtoCartFromWishlist(state, action) {

      if (!state.cart.some((item) => item._id === action.payload._id)) {

        state.cart = [item, ...state.cart];

        localStorage.setItem('cart', JSON.stringify(state.cart));

      } else {

      }
    },

    actionIncQty(state, action) {
      const index = state.cart.findIndex((item) => item._id === action.payload);
      state.cart[index].quantity += 1;

      !isUser && localStorage.setItem('cart', JSON.stringify(state.cart));
    },

    actionDecQty(state, action) {
      const index = state.cart.findIndex((item) => item._id === action.payload);
      state.cart[index].quantity -= 1;

      !isUser && localStorage.setItem('cart', JSON.stringify(state.cart));
    }
  }
})

export const {
  actionSetWishlist,
  actionAddToWishlist,
  actionRemoveFromWishlist,
  actionSetCart,
  actionAddToCart,
  actionRemoveFromCart,
  actionAddtoCartFromWishlist,
  actionUpdateWishlist,
  actionIncQty,
  actionDecQty,
} = productSlice.actions;
export default productSlice.reducer;