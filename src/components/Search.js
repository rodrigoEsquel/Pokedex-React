import { useState } from 'react';
import { useDisclosure } from '@chakra-ui/react'
import useFetch from '../hooks/useFetch';
import Menu from './Menu';
import Pokemon from './Pokemon';
import pokeApi from '../pokeApi';

function Search() {
  const [pokemon, setPokemon] = useState(null);
  const [dataPokemon] = useFetch(pokeApi.getPokemonListByPage, pokemon);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const closeModal = () => {
    onClose();
    setPokemon(null);
  }
  return (
    <>
      <Menu setPokemon={setPokemon} onOpen={onOpen}/>
      <Pokemon {...dataPokemon} isOpen={isOpen} onClose={closeModal}/>
    </>
  );
}

export default Search;
