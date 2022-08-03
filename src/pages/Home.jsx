import React, { useState } from "react";
import CardContainer from "../Components/cardContainer/CardContainer";
import Loader from "../Components/loader/Loader";
import { usePokemons } from "../Components/pokemon.service/pokemon.service";

const Home = () => {
  const pokemons = usePokemons();

  //stocke les resultats des pokemons
  let pokemonResult = [];
  if (pokemons) {
    pokemonResult = pokemons.results;
    return <> <CardContainer pokemons={pokemonResult}/> </>
  }else {
    return (
      <Loader/>
      );
  }
  
};

export default Home;
