import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {
        "token": "",
        "_id": "",
        "email": "",
        "name": ""
    },
    isLoggedIn: false,
    showPopup: false,
};


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        actionLogin(state, action) {
            localStorage.setItem('user', JSON.stringify(action.payload));
            state.user = action.payload;
            state.isLoggedIn = true;
        },
        actionLogout(state, action) {
            localStorage.removeItem('user');
            state.user = initialState.user;
            state.isLoggedIn = initialState.isLoggedIn;
        },
        actionShowPopup(state, action) {
            state.showPopup = action.payload;
        },
    }
})

export const {
    actionLogin,
    actionLogout,
    actionShowPopup
} = userSlice.actions;
export default userSlice.reducer;