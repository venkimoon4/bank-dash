import { createSlice } from "@reduxjs/toolkit";

const displayNameSlice = createSlice({
  initialState: "Overview",
  name: "displayName",
  reducers: {
    updateDisplayName: (state, action) => {
      return action.payload;
    },
  },
});

const displayNameActions = displayNameSlice.actions;

export { displayNameSlice, displayNameActions };
