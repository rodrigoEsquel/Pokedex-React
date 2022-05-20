import { Text } from '@chakra-ui/react'

function Header() {
  return (    
    <Text bg="#00f"
      bgClip="text"
      _after={{textShadow: '-2px -2px #ff0'}}
      stroke='blue'
      fontSize="6xl"
      fontWeight="extrabold"
      textAlign='center'>
      Poke-API
    </Text>

  );
}

export default Header;