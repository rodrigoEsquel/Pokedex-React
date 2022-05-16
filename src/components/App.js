import { useState } from 'react';
import useFetch from '../hooks/useFetch';
import {useDisclosure} from '@chakra-ui/react'
import pokeApi from '../pokeApi';
import Menu from './Menu';
import Pokemon from './Pokemon';

function App() {
  const [numeroPagina, setPagina] = useState(0);
  const [numeroPokemon, setPokemon] = useState();
  const listaPokemon = useFetch(pokeApi.nombre, numeroPokemon)
  const dataPokemon = useFetch(pokeApi.lista, numeroPagina)
 
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="App">
      <Menu onOpen={onOpen} lista={listaPokemon}/>
      <Pokemon isOpen={isOpen} onClose={onClose} datos={dataPokemon}/>
    </div>
  );
}

export default App;
