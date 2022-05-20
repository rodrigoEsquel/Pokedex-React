import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './Header';
import Search from './Search';

function App() {
  return (
    <React.StrictMode>
      <ChakraProvider>
        <Header />
        <Search />
      </ChakraProvider>
    </React.StrictMode>
  );
}

export default App;
