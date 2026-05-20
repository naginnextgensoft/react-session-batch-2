import { createSlice } from "@reduxjs/toolkit";


const initialState: {
    count: number
} = {
    count: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        },
        decrementByValue: (state, { payload }) => {
            if (payload >= 0)
                state.count -= payload;
        }
    }
})

export const { increment, decrement, decrementByValue } = counterSlice.actions;

export default counterSlice.reducer;