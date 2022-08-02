import { configureStore } from '@reduxjs/toolkit'
import pokedexReducer from '../reducer/pokedexReducer'

export const store = configureStore({
  reducer: {
    pokedex: pokedexReducer
  },
})