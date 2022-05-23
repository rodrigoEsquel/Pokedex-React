import { Flex, IconButton, Input } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon, SearchIcon } from '@chakra-ui/icons'
import { validacionPokemon } from '../pokeApi';


function ButtonPad({previousPage, nextPage, inputValue, setPagina, setPokemon}) {
  return (
    <Flex h='35px' w='250px' border='1px' rounded='md' bg='red.900' borderColor='black' alignItems={'center'}>
      
        <IconButton size='sm' onClick={previousPage ? () => {setPagina(previousPage)} : () => {} } icon={<ArrowLeftIcon />} />
        <Input w={'150px'}  size='sm' placeholder='Search your pokemon' onChange={(e) => {inputValue = e.target.value}} />
        <IconButton size='sm' onClick={() => {validacionPokemon(inputValue, setPokemon)}} icon={<SearchIcon />} />
        <IconButton size='sm' onClick={nextPage ? () => {setPagina(nextPage)} : () => {} } icon={<ArrowRightIcon />} />
    </Flex>
  )
}
export default ButtonPad