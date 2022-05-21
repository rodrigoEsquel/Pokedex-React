import { Flex, Text } from '@chakra-ui/react'

function Header() {
  return (  
    <Flex justifyContent={'center'} zIndex={1} bg={'blackAlpha.700'}>
    <Text bg="#00f"
      bgClip="text"
      _after={{textShadow: '-2px -2px #ff0'}}
      stroke='blue'
      fontSize="6xl"
      fontWeight="extrabold"
      textAlign='center'>
      Poke-API
    </Text>
</Flex>
  );
}

export default Header;