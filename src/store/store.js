import { configureStore } from '@reduxjs/toolkit';
import authReducer, { actionLogin } from './authSlice';
import expenseReducer from './expenseSlice';
import budgetReducer from './budgetSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        expense: expenseReducer,
        budget: budgetReducer,
    }
})

const user = JSON.parse(localStorage.getItem('user'));

if (user) {
    store.dispatch(actionLogin(user));
}

export default store;