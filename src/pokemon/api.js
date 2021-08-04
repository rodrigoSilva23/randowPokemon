import axios from "axios";

const apiPokemons = axios.create({
  baseURL: `https://pokeapi.co/api/v2/pokemon`
});

const randomNum = () => Math.floor(Math.random() * 807 + 1).toString();

const Pokemons = () => {
  return apiPokemons.get(randomNum());
};
export default Pokemons;