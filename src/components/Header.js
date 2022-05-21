import { Flex, Text } from '@chakra-ui/react'

function Header() {
  return (  
    <Flex h='62px' justifyContent={'center'} bg={'red.500'}  grow='0' alignItems={'center'}>
      <Text bg="#ff0"
        bgClip="text"
        fontSize="3xl"
        fontWeight="extrabold"
        textAlign='center'>
        Poke-API
      </Text>
    </Flex>
  );
}

export default Header;