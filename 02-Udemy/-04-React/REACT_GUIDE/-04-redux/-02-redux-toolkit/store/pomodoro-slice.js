import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sessions: 0,
  sessionTime: 0,
  breakTime: 0,
};

const pomodoroSlice = createSlice({
  name: "pomodoro",
  initialState: initialState,
  reducers: {
    changeSessions(state, action) {
      state.sessions = action.payload;
    },
    changeSessionTime(state, action) {
      state.sessionTime = action.payload;
    },
    changeBreakTime(state, action) {
      state.breakTime = action.payload;
    },
  },
});

export const pomodoroActions = pomodoroSlice.actions;

export default pomodoroSlice;
