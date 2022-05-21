import React from 'react';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import Header from './Header';
import Pokedex from './Pokedex';

function App() {
  return (
    <React.StrictMode>
      <ChakraProvider>
        <Flex flexDirection={'column'} h='100vh' style={{'backgroundImage': 'url("img/background.png")', 'backgroundRepeat': 'no-repeat', 'backgroundAttachment': 'fixed', 'backgroundSize': '100% 100%'}}>
          <Header />
          <Pokedex />
        </Flex>
      </ChakraProvider>
    </React.StrictMode>
  );
}

export default App;
