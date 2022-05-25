import { useState, useRef } from 'react';
import { Flex } from '@chakra-ui/react'
import useFetchWithStorage from '../hooks/useFetchWithStorage';
import pokeApi, { baseUrl } from '../pokeApi';
import Menu from './Menu';
import Pokemon from './Pokemon';
import Display from './Display'
import ButtonPad from './ButtonPad';

function Pokedex() {
  const [pagina, setPagina] = useState(baseUrl);
  const [dataPagina] = useFetchWithStorage(pokeApi.getPokemonListByPage, pagina);
  const refInputValue = useRef('');
  const [pokemon, setPokemon] = useState(null);
  const [dataPokemon] = useFetchWithStorage(pokeApi.getPokemonByNameOrId, pokemon);

  return (
    <Flex justifyContent={'center'} alignItems={'center'} grow='1' >
      <Flex m={5} p={3} bg={'red.500'} rounded={'md'} flexDirection={{sm: 'column', lg: 'row'}} justifyContent={'space-evenly'} alignItems={'center'}>
      <Flex flexDirection={{sm: 'column', md: 'row'}} justifyContent={'space-evenly'}>
        <Pokemon sprite={dataPokemon?.sprites} nameStat={dataPokemon?.name} types={dataPokemon?.types.map((pkmn) => pkmn.type.name)} id={dataPokemon?.id}/>
        <Flex flexDirection={'column'} h='400px' w='250px' m={3} justifyContent={'space-between'}>
          <Display heightStat={dataPokemon?.height} weightStat={dataPokemon?.weight} stats={dataPokemon?.stats.map((pkmn)=>({name: pkmn.stat.name, value: pkmn.base_stat}))}/>
          <ButtonPad previousPage={dataPagina?.previous} nextPage={dataPagina?.next} inputValue={refInputValue.current} setPagina={setPagina} setPokemon={setPokemon}/>
        </Flex>
      </Flex >
      <Menu setPokemon={setPokemon} listResults={dataPagina?.results} /> 
    </Flex>
</Flex>
  );
}

export default Pokedex;
