import { createSlice } from "@reduxjs/toolkit";
import addToLocalStorage from "../Components/pokemon.service/pokemon.service.localStorage";

let initialState = localStorage.getItem("pokedex")
  ? JSON.parse(localStorage.getItem("pokedex"))
  : [];

export const PokedexSlice = createSlice({
  name: "pokedex",
  initialState,
  reducers: {
    add: (state, action) => {
      if (!state.find((pokemon) => pokemon.name === action.payload.name)) {
        state.push(action.payload);
      }
      addToLocalStorage(state);
    },
    remove: (state, action) => {
      state.splice(
        state.findIndex((pokemon) => pokemon.name === action.payload.name),
        1
      );
      addToLocalStorage(state);
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove } = PokedexSlice.actions;

export default PokedexSlice.reducer;
