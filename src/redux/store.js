import { configureStore } from '@reduxjs/toolkit'
import pokemonListReducer from './slice/pokemonListSlice'
import allPokemonReducer from './slice/allPokemonSlice'

export const store = configureStore(
  {
    reducer: {
      pokemonList : pokemonListReducer,
      allPokemon  : allPokemonReducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      })
  }
)