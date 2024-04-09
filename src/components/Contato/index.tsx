import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editarContato, removerContato } from '../../redux/contatoSlice'
import { Contato as ContatoType } from '../../redux/contatoSlice'
import { ButtonEditar, ButtonRemover, Container } from './styles'

interface Props {
  contato: ContatoType
  onRemover: () => void
}

const Contato: React.FC<Props> = ({ contato, onRemover }) => {
  const dispatch = useDispatch()
  const [editing, setEditing] = useState(false)
  const [novoNome, setNovoNome] = useState(contato.nome)
  const [novoEmail, setNovoEmail] = useState(contato.email)
  const [novoTelefone, setNovoTelefone] = useState(contato.telefone)

  const Editar = () => {
    setEditing(true)
  }

  const CancelarEdicao = () => {
    setEditing(false)
    // Reverte os campos de entrada para os valores originais do contato
    setNovoNome(contato.nome)
    setNovoEmail(contato.email)
    setNovoTelefone(contato.telefone)
  }

  const SalvarEdicao = () => {
    const contatoEditado: ContatoType = {
      ...contato,
      nome: novoNome,
      email: novoEmail,
      telefone: novoTelefone
    }
    dispatch(editarContato(contatoEditado))
    setEditing(false)
  }

  const Remover = () => {
    if (window.confirm('Tem certeza que deseja remover este contato?')) {
      dispatch(removerContato(contato.id))
      onRemover() // Notifica o componente pai sobre a remoção do contato
    }
  }

  return (
    <Container>
      {editing ? (
        <div>
          <input
            type="text"
            value={novoNome}
            onChange={(e) => setNovoNome(e.target.value)}
          />
          <input
            type="email"
            value={novoEmail}
            onChange={(e) => setNovoEmail(e.target.value)}
          />
          <input
            type="tel"
            value={novoTelefone}
            onChange={(e) => setNovoTelefone(e.target.value)}
          />
          <ButtonEditar onClick={SalvarEdicao}>Salvar</ButtonEditar>
          <ButtonRemover onClick={CancelarEdicao}>Cancelar</ButtonRemover>
        </div>
      ) : (
        <div>
          <p>Nome: {contato.nome}</p>
          <p>Email: {contato.email}</p>
          <p>Telefone: {contato.telefone}</p>
          <ButtonEditar onClick={Editar}>Editar</ButtonEditar>
          <ButtonRemover onClick={Remover}>Remover</ButtonRemover>
        </div>
      )}
    </Container>
  )
}

export default Contato
