import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './Header';
import Pokedex from './Pokedex';

function App() {
  return (
    <React.StrictMode>
      <ChakraProvider>
        <Header />
        <Pokedex />
      </ChakraProvider>
    </React.StrictMode>
  );
}

export default App;
