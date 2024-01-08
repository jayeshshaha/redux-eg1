import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    c:0
};
// export const customReducer = createReducer(
//     initalState,
//     {
//         increment:(state) =>{
//             state.c += 1;
//         },
//         incrementByValue:(state,action) =>{
//             state.c = action.payload; 
//         },
//         decrement:(state) =>{
//             state.c -= 1;
//         }

//     })

export const customReducer = createReducer(initialState, (builder) => {
    builder
        .addCase('increment', (state) => {
            state.c += 1;
        })
        .addCase('incrementByValue', (state, action) => {
            state.c += action.payload; // Assign action.payload directly without the intermediate increment
        })
        .addCase('decrement', (state) => {
            state.c -= 1;
        });
});