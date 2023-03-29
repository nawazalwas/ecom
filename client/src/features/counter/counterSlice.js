import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:"xyz", // don't matter
    initialState:{
        value:0,
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
export default counterSlice.reducer;