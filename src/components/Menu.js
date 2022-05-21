import { Text, Flex, Grid  } from '@chakra-ui/react'


function Menu({setPokemon, listResults = []}) {

  return (  
    <Grid h='400' w='500px' templateRows='repeat(10, 1fr)' templateColumns='repeat(2, 1fr)' autoFlow={'column'} bg='gray.500' rounded='md'>
      {listResults.map(({name,url}) => (
        <Flex mx={2} p={1} justifyContent="space-between" bg='gray.100' key={name}onClick={setPokemon(url)} _hover={{'box-shadow': '3px 0 0 #000 inset, -3px 0 0 #000 inset', bg:'gray.200'}}>          
          <Text userSelect={'none'}>
            {name.toUpperCase()}
          </Text>
          <Text userSelect={'none'}>
            # {url.split('/')[6]} 
          </Text>
        </Flex >
      ))}
    </Grid>
  );
}

export default Menu;