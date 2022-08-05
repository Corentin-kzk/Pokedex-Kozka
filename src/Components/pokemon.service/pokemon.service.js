import { useState, useEffect } from "react";
import axios from "axios";

/**
 * get data with Axios
 * @param {STRING} url
 * @param {FUNCTION} setData
 *
 */
async function fetchData(url, setData = null) {
  const { data } = await axios.get(url);
  setData(data);

}

export function usePokemons(
  url = "https://pokeapi.co/api/v2/pokemon/?limit=649"
) {
  const [pokemons, setPokemons] = useState(null);
  useEffect(() => {
    fetchData(url, setPokemons);
  }, []);
  return pokemons;
}
export function usePokemonsByUrl(url) {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    fetchData(url, setPokemons);
  }, []);
  return pokemons;
}

export function usePokemonsByID(id) {
  const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    fetchData(`https://pokeapi.co/api/v2/pokemon/${id}/`, setPokemon);
  }, []);
  return pokemon;
}

export function useSpeciesByID(id) {
  const [species, setSpecies] = useState(null);
  useEffect(() => {
    fetchData(`https://pokeapi.co/api/v2/pokemon-species/${id}/`, setSpecies);
  }, []);
  return species;
}

export async function useEvolutionsByID(id) {
  const test = async () => {
    const evol = await axios.get(`https:/pokeapi.co/api/v2/evolution-chain/${id}/`)
    return evol
  };
  const {data} = await test();
  return data
}

//get and sort evulotion make by ProNatik et Jordan KAYA
export function getEvolutions(chain, evolutions = []) {
  const name = chain.species.name;
  const url = chain.species.url;

  evolutions.push({ name, url });

  if (chain.evolves_to.length === 0) return evolutions;
  else return getEvolutions(chain.evolves_to[0], evolutions);
}
