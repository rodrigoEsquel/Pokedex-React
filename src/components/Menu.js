import Item from "./Item";
import { Stack } from '@chakra-ui/react'

function Menu({onOpen}) {
  return (
    <Stack spacing={4} direction='row' align='center'>
      <Item onOpen={onOpen}/>
    </Stack>
  );
}

export default Menu;