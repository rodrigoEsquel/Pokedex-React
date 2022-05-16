import { Button } from '@chakra-ui/react'

function Item({onOpen}) {

  return (
  <Button colorScheme='teal' variant='outline' onClick={onOpen}>
    Button
  </Button>
  );
}

export default Item;