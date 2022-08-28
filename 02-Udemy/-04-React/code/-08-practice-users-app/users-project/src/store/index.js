import { configureStore } from "@reduxjs/toolkit";

import usersSlice from "./users-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: { users: usersSlice.reducer, ui: uiSlice.reducer },
});
export default store;
