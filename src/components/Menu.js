import { useState } from 'react';
import useFetch from '../hooks/useFetch';
import pokeApi from '../pokeApi';
import Item from "./Item";
import { Spinner,Grid, GridItem } from '@chakra-ui/react'


function Menu({setPokemon, onOpen}) {
  const [pagina, setPagina] = useState('https://pokeapi.co/api/v2/pokemon/');
  const [dataPagina] = useFetch(pokeApi.getPokemonListByPage, pagina);
  
  return (
    <Grid  
      h='200px'
      templateRows='repeat(2, 1fr)'
      templateColumns='repeat(11, 1fr)'
      gap={6}
      bg='blue.300'
    >
      <GridItem rowSpan={2} bg='blue.500' >
        <Item name='<<' onClick={() => {setPagina(dataPagina.previous)}}/>
      </GridItem>
    {dataPagina?.results.map(({name,url}) => (
      <GridItem bg='blue.500' w='100%'  key={name}>
        <Item
          name={name}
          number={url.split('/')[6]} 
          onClick={() => {
            setPokemon(url);
            onOpen();
          }}
        />
      </GridItem>
      )) ?? <Spinner /> 
    }
      <GridItem rowSpan={2} bg='blue.500' >
        <Item name='>>' onClick={() => {setPagina(dataPagina.next)}}/>
      </GridItem>
    </Grid>
  );
}

export default Menu;