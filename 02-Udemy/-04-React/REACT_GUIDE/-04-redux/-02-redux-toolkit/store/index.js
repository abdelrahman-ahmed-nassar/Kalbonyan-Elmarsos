import { configureStore } from "@reduxjs/toolkit";

import pomodoroSlice from "./pomodoro-slice";

const store = configureStore({
  reducer: { pomodoro: pomodoroSlice.reducer },
});

export default store;
