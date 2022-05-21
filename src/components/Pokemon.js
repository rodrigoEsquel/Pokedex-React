import {
  SimpleGrid,  
  Text,
  Image,
} from  '@chakra-ui/react'

function Pokemon({forms, sprite}) {
  return (
    <SimpleGrid h='400px' w='250px' m={3} justifyContent={'center'} bg={'cyan.100'}>       
        <Text textAlign={'center'}>{forms?.[0].name.toUpperCase() ?? 'Selecciona un Pokemon'}</Text>
        <Image src={sprite?.other['official-artwork'].front_default ?? '../../img/pokebola.png' } alt='Pokemon image' />
    </SimpleGrid>
  )
}

export default Pokemon;