import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { adicionarContato, editarContato, removerContato } from '../../redux/contatoSlice';
import { Contato } from '../../redux/contatoSlice';
import { Form } from './styles';

interface Props {
  contatos: Contato[];
}

const AdicionarContato: React.FC<Props> = ({ contatos }) => {
  const dispatch = useDispatch();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  const Submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Verifica se já existe algum contato com o mesmo email
    const contatoExistente = contatos.find(contato => contato.email === email);
    if (contatoExistente) {
      // Se existir, atualiza o contato
      dispatch(editarContato({
        id: contatoExistente.id,
        nome,
        email,
        telefone,
      }));
    } else {
      // Se não existir, adiciona um novo contato
      dispatch(adicionarContato({
        id: contatos.length + 1, // Gera um ID único
        nome,
        email,
        telefone,
      }));
    }
    // Limpa os campos do formulário após adicionar
    setEmail('');
    setTelefone('');
  };

  const Remover = (id: number) => {
    // Remove o contato com o ID especificado
    dispatch(removerContato(id));
  };

  return (
    <Form onSubmit={Submit}>
      <input type="text" placeholder="Digite o nome completo" value={nome} onChange={(e) => setNome(e.target.value)} required />
      <input type="email" placeholder="Digite o e-mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="tel" placeholder="Digite o telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} required />
      <button type="submit">Adicionar</button>
      <ul>
        {contatos.map(contato => (
          <li key={contato.id}>
            <span>{contato.nome}</span>
            <span>{contato.email}</span>
            <span>{contato.telefone}</span>
            <button onClick={() => Remover(contato.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </Form>
  );
};

export default AdicionarContato;
