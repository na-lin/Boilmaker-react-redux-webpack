import { configureStore } from "@reduxjs/toolkit";

// import reducer
import { exampleReducer, example } from "./slices/exampleSlice";

export const store = configureStore({
  reducer: {
    example: exampleReducer,
  },
});

// export
export { example };
