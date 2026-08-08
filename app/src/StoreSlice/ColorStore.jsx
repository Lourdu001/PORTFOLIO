import { configureStore } from "@reduxjs/toolkit";
import { MenuReducer, NavbarReducer, ThemeReduced } from "./ColorSlice";

export const store = configureStore({
  reducer: {
    theme: ThemeReduced,
    nav: NavbarReducer,
    menu: MenuReducer,
  },
});
