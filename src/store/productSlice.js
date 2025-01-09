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
      const user = JSON.parse(localStorage.getItem('user'));

      if (index === -1) {
        state.cart = [{ _id: Date.now(), product, size, quantity: 1 }, ...state.cart];
        toast.success("Product added to your cart");
        if (!user) localStorage.setItem('cart', JSON.stringify(state.cart));
      } else {
        if (state.cart[index].product.size.find((item) => item.name === size).quantity > state.cart[index].quantity) {
          state.cart[index].quantity += 1;
          toast.success("Product added to your cart");
          if (!user) localStorage.setItem('cart', JSON.stringify(state.cart));
        } else {
          toast.error('You have already added the maximum quantity to cart');
        }
      }
    },

    actionRemoveFromCart(state, action) {
      const user = JSON.parse(localStorage.getItem('user'));
      state.cart = state.cart.filter((item) => item._id !== action.payload);
      toast.error('Product remove from your cart');
      if (!user) localStorage.setItem('cart', JSON.stringify(state.cart));
    },

    actionIncQty(state, action) {
      const user = JSON.parse(localStorage.getItem('user'));
      const index = state.cart.findIndex((item) => item._id === action.payload);

      if (state.cart[index].product.size.find((item) => item.name === state.cart[index].size).quantity > state.cart[index].quantity) {
        state.cart[index].quantity += 1;
        if (!user) localStorage.setItem('cart', JSON.stringify(state.cart));
      } else {
        toast.error('You have already added the maximum quantity to cart');
      }
    },

    actionDecQty(state, action) {
      const user = JSON.parse(localStorage.getItem('user'));
      const index = state.cart.findIndex((item) => item._id === action.payload);

      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity -= 1;
        if (!user) localStorage.setItem('cart', JSON.stringify(state.cart));
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