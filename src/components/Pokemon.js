import {
  Flex,
  Text,
  Image,
} from  '@chakra-ui/react'

function Pokemon({nameStat, sprite, types, id}) {
  const textColor = 'white';
  return (
    <Flex h='400px' w='250px' m={3} rounded={'sm'} bg={'red.700'} alignContent={'center'} flexDirection={'column'} justifyContent={'space-between'}>       
        <Text textAlign={'center'} m={3} fontSize='xl' fontWeight="bold" color={textColor}>
          {nameStat?.toUpperCase() ?? 'Selecciona un Pokemon'}
        </Text>
        <Text textAlign={'center'} fontSize='lg' fontWeight="bold" color={textColor}>
          {id ? '# ' + id : ''}
        </Text>       
        <Text textAlign={'center'} fontSize='lg' fontWeight="bold" color={textColor}>
          {types ? 'TYPE: ' + types.map((e) => e.toUpperCase()) : ''}
        </Text>
        <Image bg={'gray.600'} m={3} borderColor={'black'} border={'2px'} rounded={'xl'} src={sprite?.other['official-artwork'].front_default ?? '../../img/pokebola.png' } alt='Pokemon image' />
    </Flex>
  )
}

export default Pokemon;