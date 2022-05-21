import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './Header';
import Pokedex from './Pokedex';

function App() {
  return (
    <React.StrictMode>
      <ChakraProvider>
        <Header />
        <Pokedex style={{'backgroundImage': 'url("../../public/img/background.png")', 'backgroundRepeat': 'no-repeat', 'backgroundAttachment': 'fixed', 'backgroundSize': '100% 100%'}}/>
      </ChakraProvider>
    </React.StrictMode>
  );
}

export default App;
