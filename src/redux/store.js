import { configureStore } from '@reduxjs/toolkit'
import pokemonListReducer from './slice/pokemonListSlice'

export const store = configureStore(
  {
    reducer: {
      pokemonList : pokemonListReducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      })
  }
)