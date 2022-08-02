import React from "react";
import { usePokemons } from "../pokemon.service/pokemon.service";
import Card from "./Card";

const CardContainer = () => {
  const pokemons = usePokemons();
  console.log(pokemons);
  
  //stocke les resultats des pokemons
  let pokemonResult = [];
  if (pokemons.results) {
    pokemonResult = pokemons.results;
  }
  return (
    <section className="cards">
      {pokemonResult.map((pokemon, index) => (
        <Card pokemon={pokemon} key={Date.now() + index} />
      ))}
      
    </section>
  );
};

export default CardContainer;
