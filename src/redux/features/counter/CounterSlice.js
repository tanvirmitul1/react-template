import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counters: { counter1: { value: 0 }, counter2: { value: 0 } },
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      const counterId = action.payload;
      state.counters[`counter${counterId}`].value += 1;
    },
    decrement: (state, action) => {
      const counterId = action.payload;
      state.counters[`counter${counterId}`].value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
