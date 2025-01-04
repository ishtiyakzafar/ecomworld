import { createSlice } from "@reduxjs/toolkit";
import cartService from "../services/cart";

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

            const products = JSON.parse(localStorage.getItem('cart'));

            if (products) {
                let data = []

                for (const element of products) {
                    data.push({
                        productId: element.product._id,
                        quantity: element.quantity,
                        size: element.size
                    })
                }

                cartService.addCartItems({ cartItems: data }).then((res) => {
                    localStorage.removeItem('cart');
                }).catch((error) => {
                    console.log(error)
                })
            }

        },
        actionLogout(state, action) {
            localStorage.removeItem('user');
            state.user = initialState.user;
            state.isLoggedIn = initialState.isLoggedIn;
        },
    }
})

export const {
    actionLogin,
    actionLogout,
    actionShowPopup
} = authSlice.actions;
export default authSlice.reducer;