import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name:"counter",
    initialState:{
        value:0
    },
    reducers:{
        increment:(state)=>{
            state.value += 2
        },
        decrement:(state)=>{
            state.value -= 2
        }
    }
});

export const {increment,decrement} = counterSlice.actions;
export default counterSlice.reducer