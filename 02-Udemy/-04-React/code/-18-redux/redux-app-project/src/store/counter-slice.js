import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, show: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increaseBy5: (prevState, action) => {
      prevState.counter = prevState.counter + action.payload;
    },
    increment: (prevState, action) => {
      prevState.counter = prevState.counter + 1;
    },
    decrement: (prevState, action) => {
      prevState.counter = prevState.counter - 1;
    },
    toggle: (prevState, action) => {
      prevState.show = !prevState.show;
    },
  },
});
export const counterAction = counterSlice.actions;

export default counterSlice.reducer;
