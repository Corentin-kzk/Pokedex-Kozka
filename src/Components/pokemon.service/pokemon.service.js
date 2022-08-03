import { useState, useEffect } from "react";
import axios from "axios";

/**
 * get data with Axios
 * @param {FUNCTION} setData
 * @param {STRING} url
 */
async function fetchData(setData, url) {
  const { data } = await axios.get(url);
  setData(data);
}

export function usePokemons(url = "https://pokeapi.co/api/v2/pokemon/") {
  const [pokemons, setPokemons] = useState(null);
  useEffect(() => {
    fetchData(setPokemons, url);
  },[]);
  return pokemons;
}
export function usePokemonsByUrl(url) {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    fetchData(setPokemons, url);
  }, []);
  return pokemons;
}

export function usePokemonsByID(id) {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    fetchData(setPokemon, `https://pokeapi.co/api/v2/pokemon/${id}/`);
  }, []);
  return pokemon;
}

export function useEvolutionsByID(id) {
  const [evolution, setEvolution] = useState(null);
  useEffect(() => {
    fetchData(setEvolution, `https://pokeapi.co/api/v2/evolution-chain/${id}/`);
  }, []);
  return evolution;
}
