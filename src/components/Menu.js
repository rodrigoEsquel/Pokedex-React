import { useState, useRef, useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import pokeApi, { baseUrl } from '../pokeApi';
import Item from "./Item";
import { Spinner, SimpleGrid, IconButton, Center, Input, Box } from '@chakra-ui/react'
import { AddIcon, SearchIcon } from '@chakra-ui/icons'


function Menu({setPokemon, onOpen}) {
  const [pagina, setPagina] = useState(baseUrl);
  const [dataPagina] = useFetch(pokeApi.getPokemonListByPage, pagina);
  const refDataIncremental = useRef([]);
  const refDataAnterior =  useRef();
  const refInputValue = useRef('');
  useEffect(()=>{
    if((JSON.stringify(refDataAnterior.current) !== JSON.stringify(dataPagina)) && dataPagina) {
      refDataAnterior.current = dataPagina;
      refDataIncremental.current = refDataIncremental.current.concat(dataPagina.results)
    }
  },[dataPagina]);
  return (
    <Center>
      <IconButton pos="fixed" bottom="10" right="10" zIndex={2} onClick={dataPagina?.next == null ? () => {} : () => {setPagina(dataPagina.next)}} icon={<AddIcon />} />
      <Box pos="fixed" bottom="10" w={64} zIndex={3}>
      <Input w={48}  placeholder='Search your pokemon' onChange={(e) => {refInputValue.current = e.target.value}} />
      <IconButton onClick={() => {
        console.log(refInputValue.current);
        setPokemon(baseUrl + refInputValue.current);
        onOpen();
      }} icon={<SearchIcon />} />
      </Box>
      <SimpleGrid columns={[3, 4, 5]} spacing='20px' w='42rem'>
        {refDataIncremental.current.map(({name,url}) => (
          <Item            
            name={name}
            key={name}
            number={url.split('/')[6]} 
            onClick={() => {
              setPokemon(url);
              onOpen();
           }}
         />
        )) ?? <Spinner /> 
        }
      </SimpleGrid>
    </Center>
  );
}

export default Menu;