import { useState, useRef } from 'react';
import { Flex, Grid, VStack } from '@chakra-ui/react'
import useFetch from '../hooks/useFetch';
import Menu from './Menu';
import Pokemon from './Pokemon';
import Display from './Display'
import ButtonPad from './ButtonPad';
import pokeApi, { baseUrl } from '../pokeApi';

function Pokedex() {
  const [pagina, setPagina] = useState(baseUrl);
  const [dataPagina] = useFetch(pokeApi.getPokemonListByPage, pagina);
  const refInputValue = useRef('');
  const [pokemon, setPokemon] = useState(null);
  const [dataPokemon] = useFetch(pokeApi.getPokemonListByPage, pokemon);  
  console.log(pokemon);

  return (
    <Flex justifyContent={'center'} alignItems={'center'}>
    <Grid h='400px' w='1000px' templateRows='repeat(1, 1fr)' templateColumns='repeat(2, 1fr)'>
      <Grid h='400px' w='500px' templateRows='repeat(1, 1fr)' templateColumns='repeat(2, 1fr)' >
        <Pokemon sprite={dataPokemon?.sprite} forms={dataPokemon?.forms}/>
        <VStack>
          <Display />
          <ButtonPad previousPage={dataPagina?.previous} nextPage={dataPagina?.next} inputValue={refInputValue.current} setPagina={setPagina} setPokemon={setPokemon}/>
        </VStack>
      </Grid>
      <Menu setPokemon={setPokemon} listResults={dataPagina?.results} />
    </Grid>
    </Flex>
  );
}

export default Pokedex;
