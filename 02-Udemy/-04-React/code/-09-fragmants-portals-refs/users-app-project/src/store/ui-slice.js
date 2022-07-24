import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "users",
  initialState: {
    error: {
      title: "",
      message: "",
    },
    hasError: false,
    isConfirming: false,
    currentInputId: "",
  },
  reducers: {
    showError(state, action) {
      state.hasError = true;
      state.error.title = action.payload.title;
      state.error.message = action.payload.message;
    },
    hideError(state) {
      state.hasError = false;
    },
    showConfirming(state, action) {
      state.isConfirming = true;
      state.currentInputId = action.payload;
    },
    hideConfirming(state) {
      state.isConfirming = false;
    },
  },
});

// action creator

export const uiActions = uiSlice.actions;
export default uiSlice;
