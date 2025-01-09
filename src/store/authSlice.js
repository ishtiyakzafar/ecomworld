import { createSlice } from "@reduxjs/toolkit";
import cartService from "../services/cart";
import store from "./store";
import { actionSetCart } from "./productSlice";


const initialState = {
    user: {
        token: "",
        id: "",
        email: "",
        name: "",
    },
    isLoggedIn: false,
};


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        actionLogin(state, action) {
            localStorage.setItem('user', JSON.stringify(action.payload));
            state.user = action.payload;
            state.isLoggedIn = true;
        },
        actionLogout(state, action) {
            localStorage.removeItem('user');
            localStorage.removeItem('cart');
            state.user = initialState.user;
            state.isLoggedIn = initialState.isLoggedIn;
        },
    }
})

export const {
    actionLogin,
    actionLogout,
} = authSlice.actions;
export default authSlice.reducer;