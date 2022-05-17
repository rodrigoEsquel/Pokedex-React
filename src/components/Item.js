import { Button } from '@chakra-ui/react'

function Item({name, onClick, number = null}) {

  return (
  <Button w='full' h='full' colorScheme='teal' variant='outline' name={name} onClick={onClick}>
    {name.toUpperCase()} 
    <br/> 
    {number && '# ' + number}
  </Button>
  );
}

export default Item;