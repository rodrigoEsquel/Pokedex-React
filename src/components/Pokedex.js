import { useState, useRef } from 'react';
import { Flex, SimpleGrid, VStack } from '@chakra-ui/react'
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
  console.log(dataPokemon);

  return (
    <Flex justifyContent={'center'} alignItems={'center'} h='100vh'>
    <SimpleGrid columns={{sm: 1, lg: 2}} bg={'red.400'}>
      <SimpleGrid columns={{sm: 1, md: 2}} >
        <Pokemon sprite={dataPokemon?.sprites} forms={dataPokemon?.forms}/>
        <SimpleGrid columns={1} h='400px' w='250px' my={{sm: 0, md: 3}} mx={3} justifyContent={'center'} bg={'red.600'}>
          <Display />
          <ButtonPad previousPage={dataPagina?.previous} nextPage={dataPagina?.next} inputValue={refInputValue.current} setPagina={setPagina} setPokemon={setPokemon}/>
        </SimpleGrid>
      </SimpleGrid >
      <Menu setPokemon={setPokemon} listResults={dataPagina?.results} />
    </SimpleGrid >  
    </Flex>
  );
}

export default Pokedex;
