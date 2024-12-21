import { configureStore } from '@reduxjs/toolkit';
import userReducer, { actionLogin } from './userSlice';
import expenseReducer from './expenseSlice';
import budgetReducer from './budgetSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        expense: expenseReducer,
        budget: budgetReducer,
    }
})

const user = JSON.parse(localStorage.getItem('user'));

if (user) {
    store.dispatch(actionLogin(user));
}

export default store;