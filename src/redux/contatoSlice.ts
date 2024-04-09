import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Contato {
  id: number
  nome: string
  email: string
  telefone: string
}

const initialState: Contato[] = []

const contatoSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    adicionarContato: (state, action: PayloadAction<Contato>) => {
      state.push(action.payload)
    },
    removerContato: (state, action: PayloadAction<number>) => {
      return state.filter((contato) => contato.id !== action.payload)
    },
    editarContato: (state, action: PayloadAction<Contato>) => {
      const index = state.findIndex(
        (contato) => contato.id === action.payload.id
      )
      if (index !== -1) {
        state[index] = action.payload
      }
    }
  }
})

export const { adicionarContato, removerContato, editarContato } =
  contatoSlice.actions
export default contatoSlice.reducer
