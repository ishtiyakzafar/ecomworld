import { configureStore } from '@reduxjs/toolkit';
import authReducer, { actionLogin } from './authSlice';
import productReducer from './productSlice';
import appReducer from './appSlice';
import wishlistReducer from './wishlistSlice';


const store = configureStore({
    reducer: {
        auth: authReducer,
        product: productReducer,
        app: appReducer,
        wishlist: wishlistReducer,

    }
})

const user = JSON.parse(localStorage.getItem('user'));

if (user) {
    store.dispatch(actionLogin(user));
}

export default store;