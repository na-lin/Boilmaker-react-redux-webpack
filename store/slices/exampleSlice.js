import { createSlice } from "@reduxjs/toolkit";

const exampleSlice = createSlice({
  name: "example",
  initialState: {},
  reducers: {
    example(state, action) {},
  },
  extraReducers(builder) {},
});

export const exampleReducer = exampleSlice.reducer;
export const { example } = exampleSlice.actions;
