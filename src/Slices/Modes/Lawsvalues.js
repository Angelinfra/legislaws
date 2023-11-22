import { createSlice } from "@reduxjs/toolkit";

import { law1 } from "./LawP1";
import { law2 } from "./LawP2";

const initialState = {
  value: [...law1, ...law2],
};

// Action creators are generated for each case reducer function

export const LawSlice = createSlice({
  name: "Laws",
  initialState,
  reducers: {},
});

export default LawSlice.reducer;
