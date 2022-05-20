import { useState, useRef } from 'react';
import useFetch from '../hooks/useFetch';
import pokeApi, { baseUrl } from '../pokeApi';
import { Spinner, IconButton, Input, Box, VStack, HStack, Text, Flex, SimpleGrid, Wrap, WrapItem, Grid, GridItem  } from '@chakra-ui/react'
import { ArrowLeftIcon, ArrowRightIcon, SearchIcon } from '@chakra-ui/icons'


function Menu({setPokemon, onOpen}) {
  const [pagina, setPagina] = useState(baseUrl);
  const [dataPagina] = useFetch(pokeApi.getPokemonListByPage, pagina);
  const refInputValue = useRef('');
  
  return (
    <VStack alignContent='center'>
      <Box pos="fixed" bottom="5" w={80} zIndex={3} border='1px' rounded='md' bg='gray.200' borderColor='gray.400' align='stretch'>
        <IconButton onClick={dataPagina?.previous == null ? () => {} : () => {setPagina(dataPagina.previous)}} icon={<ArrowLeftIcon />} />
        <Input w={48}  placeholder='Search your pokemon' onChange={(e) => {refInputValue.current = e.target.value}} />
        <IconButton onClick={() => {
          console.log(refInputValue.current);
          setPokemon(baseUrl + refInputValue.current);
          onOpen();
        }} icon={<SearchIcon />} />
        <IconButton zIndex={2} onClick={dataPagina?.next == null ? () => {} : () => {setPagina(dataPagina.next)}} icon={<ArrowRightIcon />} />
      </Box>
      <Flex h='350px' w='950px' bg='gray.500' justifyContent='center' alignItems={'center'} rounded='md'>
        <Grid h='300px' w='900px' templateRows='repeat(10, 30px)' templateColumns='repeat(2, 1fr)' autoFlow={'column'}>
          {dataPagina?.results.map(({name,url}) => (
            <Flex mx={2} p={1} justifyContent="space-between" bg='gray.100' key={name}onClick={() => {setPokemon(url);onOpen();}} _hover={{'box-shadow': '3px 0 0 #000 inset, -3px 0 0 #000 inset', bg:'gray.200'}}>          
                <Text userSelect={'none'}>
                  {name.toUpperCase()}
                </Text>           
                <Text userSelect={'none'}>
                  # {url.split('/')[6]} 
                </Text>
              </Flex >
          ))}
        </Grid>
      </Flex>
    </VStack>
  );
}

export default Menu;