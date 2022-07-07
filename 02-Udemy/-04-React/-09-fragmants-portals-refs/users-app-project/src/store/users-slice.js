import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  changed: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    addUser(state, action) {
      state.users.unshift(action.payload);
    },
    deleteUser(state, action) {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
    replaceUsers(state, action) {
      state.users = action.payload;
    },
  },
});

// action creator

export const usersActions = usersSlice.actions;
export default usersSlice;
