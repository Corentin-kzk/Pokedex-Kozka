import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const PokedexSlice = createSlice({
  name: "pokedex",
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    remove: (state, action) => {
      console.log(
        state.splice(
          state.findIndex((pokemon) => pokemon.name === action.payload.name),
          1
        )
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove } = PokedexSlice.actions;

export default PokedexSlice.reducer;
