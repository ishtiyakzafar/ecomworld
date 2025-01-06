import { configureStore } from '@reduxjs/toolkit';
import authReducer, { actionLogin } from './authSlice';
import productReducer from './productSlice';


const store = configureStore({
    reducer: {
        auth: authReducer,
        product: productReducer,
    }
})

const user = JSON.parse(localStorage.getItem('user'));

if (user) {
    store.dispatch(actionLogin(user));
}

export default store;