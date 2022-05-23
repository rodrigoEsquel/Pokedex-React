import { Text, Flex, SimpleGrid } from '@chakra-ui/react'


function Menu({setPokemon, listResults = []}) {
  return (   
      <SimpleGrid w={{sm:'250px', md:'524px'}} h={{sm:'800px', md:'400px'}} m={3} templateRows={{sm:'repeat(20, 1fr)', md:'repeat(10, 1fr)'}} templateColumns={{sm:'repeat(1, 1fr)', md:'repeat(2, 1fr)'}} autoFlow={'column'} bg='gray.500' rounded='md'>
        {listResults.map(({name,url}) => (
          <Flex px={3} py={2} justifyContent="space-between" bg='red.700' key={name} onClick={() => {setPokemon(url)}} _hover={{'boxShadow': '3px 0 0 #000 inset, -3px 0 0 #000 inset, 0 3px 0 #000 inset, 0 -3px 0 #000 inset', bg:'red.300'}}>          
            <Text userSelect={'none'} color='white' fontSize='md' fontWeight="bold">
              {name.toUpperCase()}
            </Text>
            <Text userSelect={'none'} color='white' fontSize='md' fontWeight="bold">
              # {url.split('/')[6]} 
            </Text>
          </Flex >
        ))}
      </SimpleGrid>
  );
}

export default Menu;