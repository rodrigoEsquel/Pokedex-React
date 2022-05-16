const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

function urlPokemon(pokemon) {
  return baseUrl + pokemon;
}

function urlListaPokemon(pagina) {
  return `${baseUrl}?offset=${pagina}0&limit=10`;
}

const conseguirRecurso = async (recurso) => {
  const respuesta = await fetch(recurso);
  if (!respuesta.ok) {
    throw new Error('Error en la API');
  }  
  return respuesta.json();
}

const pokeApi = {
  id: (idPokemon) => conseguirRecurso(urlPokemon(idPokemon)),
  nombre: (nombrePokemon) => conseguirRecurso(urlPokemon(nombrePokemon)),
  lista: (numeroPagina) => conseguirRecurso(urlListaPokemon(numeroPagina)),
}

export default pokeApi;

