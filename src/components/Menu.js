import { useState } from 'react';
import useFetch from '../hooks/useFetch';
import pokeApi from '../pokeApi';
import Item from "./Item";
import { Stack, Spinner,Grid, GridItem } from '@chakra-ui/react'


function Menu() {
  const [pagina, setPagina] = useState('https://pokeapi.co/api/v2/pokemon/');
  const [dataPagina] = useFetch(pokeApi.getPokemonListByPage, pagina);
  const [pokemon, setPokemon] = useState('ninguno');
  const [dataPokemon] = useFetch(pokeApi.getPokemonListByPage, pokemon);
  console.log(dataPagina,dataPokemon);
  
  return (
    <>
      <Item name='<<' onClick={() => {setPagina(dataPagina.previous)}}/>
        <Grid templateColumns='repeat(20, 1fr)' gap={6}>
      {dataPagina?.results.map(({name,url}) => (
        <GridItem w='32' h='12' bg='blue.500' >
          <Item 
            key={name}
            name={name}
            number={url.split('/')[6]} 
            onClick={() => {
              setPokemon(url);
            }}
          />
        </GridItem>
      )) ?? <Spinner />
      }

    </Grid>
      <Item name='>>' onClick={() => {setPagina(dataPagina.next)}}/>
  </>);
}

export default Menu;