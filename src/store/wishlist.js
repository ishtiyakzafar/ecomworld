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
  }
})

export const {
  actionSetWishlist,
} = wishlistSlice.actions;
export default wishlistSlice.reducer;