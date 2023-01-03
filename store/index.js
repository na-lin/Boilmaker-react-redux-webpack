import { configureStore } from "@reduxjs/toolkit";

// import reducer
import { exampleReducer, example } from "./slices/exampleSlice";

const store = configureStore({
  reducer: {
    example: exampleReducer,
  },
});

// export
export { store };

export { example };
