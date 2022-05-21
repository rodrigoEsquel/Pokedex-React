import { useState } from 'react';
import { useDisclosure, Grid } from '@chakra-ui/react'
import useFetch from '../hooks/useFetch';
import Menu from './Menu';
import Pokemon from './Pokemon';
import Display from './Display'
import ButtonPad from './ButtonPad';
import pokeApi from '../pokeApi';

function Pokedex() {
  const [pokemon, setPokemon] = useState(null);
  const [dataPokemon] = useFetch(pokeApi.getPokemonListByPage, pokemon);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const closeModal = () => {
    onClose();
    setPokemon(null);
  }
  return (
    <Grid >
      <Menu setPokemon={setPokemon} onOpen={onOpen}/>
      <Grid>
      <Pokemon {...dataPokemon} isOpen={isOpen} onClose={closeModal}/>
      <Grid>
        <Display />
        <ButtonPad />
      </Grid>
      </Grid>
    </Grid>
  );
}

export default Pokedex;
