import { Flex } from '@chakra-ui/react'

function Item({name, onClick, number = null}) {

  return (
  <Flex
      borderRadius='10px'
      bg='#A0AEC0'
      h='88px'
      alignItems='center'
      direction='column'
      onClick={onClick}>
    <p>{name.toUpperCase()}</p>
    <p>{number && '# ' + number}</p>
  </Flex>
  );
}

export default Item;