/*
const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

function urlPokemon(pokemon) {
  return baseUrl + pokemon;
}

function urlListaPokemon(pagina) {
  return `${baseUrl}?offset=${pagina}0&limit=10`;
}
*/

const conseguirRecurso = async (url) => {
  const respuesta = await fetch(url)
  const recurso = await respuesta.json();
  return recurso;   
}

const pokeApi = {
  getPokemonById: (id) => conseguirRecurso(id),
  getPokemonByName: (nombre) => conseguirRecurso(nombre),
  getPokemonListByPage: (pagina) => conseguirRecurso(pagina),
};

export default pokeApi;

