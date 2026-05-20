import { configureStore, } from "@reduxjs/toolkit";
import counterReducer from './slices/counterSlice';
import productReducer from './slices/productSlice';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        product: productReducer
    },
    devTools: true
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;