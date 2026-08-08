import { createSlice } from "@reduxjs/toolkit";
import NavBar from "../components/navbar";

const ColorSlice = createSlice({
  name: "Theme",
  initialState: { color: "white", bgcolor: "black" },
  reducers: {
    ThemeChange: (state) => {
      state.color = state.color === "black" ? "white" : "black";
      state.bgcolor = state.bgcolor === "white" ? "black" : "white";
    },
  },
});

const NavBarOC = createSlice({
  name: "NavControl",
  initialState: { Ncontrol: false },
  reducers: {
    ChangeControl: (state) => {
      state.Ncontrol = !state.Ncontrol;
    },
  },
});

const menuchange = createSlice({
  name:'MenuChange',
  initialState:{menudisp:true},
  reducers:{
    MenuChange:(state)=>{
      state.menudisp=!state.menudisp;
    }
  }
})

export const { ThemeChange } = ColorSlice.actions;
export const { ChangeControl } = NavBarOC.actions;
export const { MenuChange } = menuchange.actions;
export const ThemeReduced = ColorSlice.reducer;
export const NavbarReducer = NavBarOC.reducer;
export const MenuReducer = menuchange.reducer;