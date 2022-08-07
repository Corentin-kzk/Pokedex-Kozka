import React, { useState } from "react";
import CardContainer from "../Components/cardContainer/CardContainer";
import Loader from "../Components/loader/Loader";
import { usePokemons } from "../Components/pokemon.service/pokemon.service";

const Home = ({ search }) => {
  const pokemons = usePokemons();

  //stocke les resultats des pokemons
  let pokemonResult = [];
  if (pokemons) {
    pokemonResult = pokemons.results;
    // Make Search Pokemon if we have search data
    if (search) {
      //regEX to filter
      let re = new RegExp(search + ".+$", "i");
      pokemonResult = pokemonResult.filter(function (e) {
        return e.name.search(re) != -1;
      });
    }
    return (
      <>
        {" "}
        <CardContainer pokemons={pokemonResult} />{" "}
      </>
    );
  } else {
    return <Loader />;
  }
};

export default Home;
