import { useState } from 'react';
import useFetch from '../hooks/useFetch';
import pokeApi from '../pokeApi';
import Menu from './Menu';
import { Container, useDisclosure } from '@chakra-ui/react'
import Pokemon from './Pokemon';

function App() {
  const [pokemon, setPokemon] = useState('ninguno');
  const [dataPokemon] = useFetch(pokeApi.getPokemonListByPage, pokemon);
  const { isOpen, onOpen, onClose } = useDisclosure()


  return (
    <Container m={2} w='100%'>
      <Menu setPokemon={setPokemon} onOpen={onOpen}/>
      <Pokemon {...dataPokemon} isOpen={isOpen} onClose={onClose}/>
    </Container>
  );
}

export default App;
