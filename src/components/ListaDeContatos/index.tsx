import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import Contato from '../Contato';
import { Container } from './styles';
import { removerContato } from '../../redux/contatoSlice';

const ListaContatos: React.FC = () => {
  const contatos = useSelector((state: RootState) => state.contatos);
  const dispatch = useDispatch();

  // Função para remover um contato
  const RemoverContato = (id: number) => {
    dispatch(removerContato(id));
  };

  return (
    <Container>
      <h2>Contatos Cadastrados</h2>
      {contatos.map(contato => (
        <Contato key={contato.id} contato={contato} onRemover={() => RemoverContato(contato.id)} />
      ))}
    </Container>
  );
};

export default ListaContatos;

