import { configureStore } from "@reduxjs/toolkit";
import { entriesReducer, entriesSlice } from "../redux/entrySlice";

export const store = configureStore({
   reducer: {
      entries: entriesReducer,
   },
});
