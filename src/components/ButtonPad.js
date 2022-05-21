import { Flex, Box, IconButton, Input } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon, SearchIcon } from '@chakra-ui/icons'
import { baseUrl } from '../pokeApi';


function ButtonPad({previousPage, nextPage, inputValue, setPagina, setPokemon}) {
  return (
    <Flex>
    <Box w='250px' border='1px' rounded='md' bg='gray.200' borderColor='gray.400' align='stretch'>
      <IconButton onClick={previousPage ? () => {setPagina(previousPage)} : () => {} } icon={<ArrowLeftIcon />} />
      <Input w={48}  placeholder='Search your pokemon' onChange={(e) => {inputValue = e.target.value}} />
      <IconButton onClick={() => {setPokemon(baseUrl + inputValue)}} icon={<SearchIcon />} />
      <IconButton zIndex={2} onClick={nextPage ? () => {setPagina(nextPage)} : () => {} } icon={<ArrowRightIcon />} />
    </Box>
    </Flex>
  )
}
export default ButtonPad