import {
  Flex,  
  Text,
  Image,
  Center,
} from  '@chakra-ui/react'

function Pokemon({forms, sprite}) {
  return (
    <Flex> 
      <Center>
        <Text>{forms?.[0].name.toUpperCase() ?? 'Selecciona un Pokemon'}</Text>
      </Center>
      <Center>
        <Image src={sprite?.other['official-artwork'].front_default ?? '../../img/pokebola.png' } alt='Pokemon image' />
      </Center>
    </Flex>
  )
}

export default Pokemon;