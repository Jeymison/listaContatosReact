// App.tsx
import React from 'react';
import AdicionarContato from './components/AdicionarContato';
import ListaContatos from './components/ListaDeContatos';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Title } from './styles';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Title>Contatos</Title>
      <AdicionarContato contatos={[]} />
      <ListaContatos />
    </Provider>
  );
};

export default App;

