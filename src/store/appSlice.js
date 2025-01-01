import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showLoginPopup: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    actionToggleLoginPopup(state, action) {
      state.showLoginPopup = action.payload;
    },
  }
})

export const {
  actionToggleLoginPopup,
} = appSlice.actions;
export default appSlice.reducer;