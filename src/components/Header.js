import { Flex, Heading } from '@chakra-ui/react'

function Header() {
  return (  
    <Flex h='62px' justifyContent={'center'} bg={'red.500'} alignItems={'center'}>
      <Heading  bg="yellow.300"
        bgClip="text"
        fontSize="3xl"
        fontWeight="extrabold"
        textAlign='center'>
        Poke-API
      </Heading >
    </Flex>
  );
}

export default Header;