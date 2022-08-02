import React from "react";
import CardContainer from "../Components/cardPokedex/CardContainer";
import { usePokemons } from "../Components/pokemon.service/pokemon.service";

const Home = () => {
  const pokemons = usePokemons();

  
  //stocke les resultats des pokemons
  let pokemonResult = [];
  if (pokemons.results) {
    pokemonResult = pokemons.results;
  }
  return (
      <CardContainer pokemons={pokemonResult} />
  );
};

export default Home;
