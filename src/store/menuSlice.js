import { createSlice } from "@reduxjs/toolkit";

const initialMenuState = { menuIsOpen: false };

const menuSlice = createSlice({
  name: "menu",
  initialState: initialMenuState,
  reducers: {
    setMenuStateIsOpen(state, action) {
      if (action.payload !== true && action.payload !== false) {
        return;
      }
      state.menuIsOpen = action.payload;
    },
    openMenu(state) {
      state.menuIsOpen = true;
    },
    closeMenu(state) {
      state.menuIsOpen = false;
    },
  },
});

export const menuActions = menuSlice.actions;

export default menuSlice.reducer;
