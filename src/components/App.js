import { useEffect, useState } from 'react';
import Menu from './Components/Menu';

function App() {
  const [pagina, setPagina] = useState(1);
  const [pokemon, setPokemon] = useState(1);

  useEffect(() => {
  
  }, [])

  return (
    <div className="App">
      <Menu />
    </div>
  );
}

export default App;
