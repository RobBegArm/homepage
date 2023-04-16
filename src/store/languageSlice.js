import { createSlice } from "@reduxjs/toolkit";

const initialLangState = { activeLanguage: "en" };

const languageSlice = createSlice({
  name: "language",
  initialState: initialLangState,
  reducers: {
    setLanguage(state, action) {
      if (
        action.payload !== "en" &&
        action.payload !== "ru" &&
        action.payload !== "est" &&
        action.payload !== "arm"
      ) {
        return;
      }
      state.activeLanguage = action.payload;
    },
  },
});

export const languageActions = languageSlice.actions;

export default languageSlice.reducer;
