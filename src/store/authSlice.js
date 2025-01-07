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
        cartCount: 0,
        wishlistCount: 0,
    },
    isLoggedIn: false,
};

const fetchUserCart = () => {
    cartService.getUserCart().then((cart) => {
        store.dispatch(actionSetCart(cart))
    }).catch((error) => {
        console.log(error)
    })
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        actionLogin(state, action) {
            localStorage.setItem('user', JSON.stringify(action.payload));
            state.user = action.payload;
            state.isLoggedIn = true;

            const products = JSON.parse(localStorage.getItem('cart'));

            if (products && products.length > 0) {
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
                    if (window.location.pathname === '/cart') {
                        // fetchUserCart();
                    }
                }).catch((error) => {
                    console.log(error)
                })
            } else {

            }

            if (window.location.pathname === '/cart') {
                // fetchUserCart();
            }

        },
        actionLogout(state, action) {
            localStorage.removeItem('user');
            state.user = initialState.user;
            state.isLoggedIn = initialState.isLoggedIn;
        },
        actionUpdateCartCount(state, action) {
            state.user.cartCount = action.payload;
            // localStorage.setItem('user', JSON.stringify(state.user));
        },
        actionUpdateWishlistCount(state, action) {
            state.user.wishlistCount = action.payload;
            // localStorage.setItem('user', JSON.stringify(state.user));
        },
    }
})

export const {
    actionLogin,
    actionLogout,
    actionUpdateCartCount,
    actionUpdateWishlistCount
} = authSlice.actions;
export default authSlice.reducer;