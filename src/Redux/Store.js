import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Slices/Modes/Mode";
import Lawsreducer from "../Slices/Modes/Lawsvalues";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    Laws: Lawsreducer,
  },
});
