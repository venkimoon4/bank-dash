import { configureStore } from "@reduxjs/toolkit";
import { displayNameSlice } from "../slices/displayName.js";

const store = configureStore({
  reducer: {
    displayName: displayNameSlice.reducer,
  },
});

export { store };
