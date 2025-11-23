import { configureStore } from "@reduxjs/toolkit";
import { displayNameSlice } from "../slices/displayName.js";
import { loginSlice } from "../slices/login.js";

const store = configureStore({
  reducer: {
    displayName: displayNameSlice.reducer,
    login: loginSlice.reducer,
  },
});

export { store };
