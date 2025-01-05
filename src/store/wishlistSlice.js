import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    actionSetWishlist(state, action) {
      state.wishlist = action.payload;
    },

    actionAddToWishlist(state, action) {
      state.wishlist = [action.payload, ...state.wishlist];
    },

    actionRemoveFromWishlist(state, action) {
      state.wishlist = state.wishlist.filter((item) => item._id !== action.payload);;
    },
  }
})

export const {
  actionSetWishlist,
  actionAddToWishlist,
  actionRemoveFromWishlist,
} = wishlistSlice.actions;
export default wishlistSlice.reducer;