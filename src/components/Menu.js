import Item from "./Item";
import { Stack } from '@chakra-ui/react'

function Menu() {
  return (
    <Stack spacing={4} direction='row' align='center'>
      <Item />
    </Stack>
  );
}

export default Menu;