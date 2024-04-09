import { configureStore } from '@reduxjs/toolkit'
import contatosReducer from './contatoSlice'

export const store = configureStore({
  reducer: {
    contatos: contatosReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
