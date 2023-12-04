import { configureStore } from "@reduxjs/toolkit";
import { playersSlice } from "./slices/playersSlice";

import playerReducer from "./slices/playersSlice";

export const store = configureStore({
  reducer: {
    players: playerReducer
  }
});
