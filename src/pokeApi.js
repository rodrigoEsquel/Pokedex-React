
export const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
/*
function urlPokemon(pokemon) {
  return baseUrl + pokemon;
}

function urlListaPokemon(pagina) {
  return `${baseUrl}?offset=${pagina}0&limit=10`;
}
*/
export const validacionPokemon = (inputValue, callback) => {
  const regexNombrePokemon = /^[a-zA-Z]*$/;
  const regexIdPokemon = /^[0-9]*$/;
  (regexNombrePokemon.test(inputValue) || regexIdPokemon.test(inputValue)) && callback(baseUrl + inputValue);
}

const conseguirRecurso = async (url) => {
  const respuesta = await fetch(url)
  const recurso = await respuesta.json();
  return recurso;   
}

const pokeApi = {
  getPokemonByNameOrId: (nombre) => conseguirRecurso(nombre),
  getPokemonListByPage: (pagina) => conseguirRecurso(pagina),
};

export default pokeApi;

