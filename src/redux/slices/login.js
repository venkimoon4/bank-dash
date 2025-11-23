import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  initialState: false,
  name: "Login",
  reducers: {
    updateLoginStatus: (state, action) => {
      return action.payload;
    },
  },
});

const LoginActions = loginSlice.actions;

export { loginSlice, LoginActions };
