import { createSlice } from "@reduxjs/toolkit";

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
      //add items to local Storage
      localStorage.setItem("pokedex", JSON.stringify(state));
    },
    remove: (state, action) => {
      state.splice(
        state.findIndex((pokemon) => pokemon.name === action.payload.name),
        1
      );
       //remove item to local Storage
      localStorage.setItem("pokedex", JSON.stringify(state));
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove } = PokedexSlice.actions;

export default PokedexSlice.reducer;
