import React, { useState } from "react";
import CardContainer from "../Components/cardContainer/CardContainer";
import Loader from "../Components/loader/Loader";
import { usePokemons } from "../Components/pokemon.service/pokemon.service";

const Home = ({ search }) => {
  console.log(search);
  const pokemons = usePokemons();

  //stocke les resultats des pokemons
  let pokemonResult = [];
  if (pokemons) {
    pokemonResult = pokemons.results;
    if (search) {
      let re = new RegExp(search + ".+$", "i");
      pokemonResult = pokemonResult.filter(function (e, i, a) {
        return e.name.search(re) != -1;
      });
      // pokemonResult = pokemonResult.filter((pokemon) => {
      //   console.log(JSON.parse(pokemon.name));
      //   console.log(json.parse(search));
      //   return pokemon.name === search;
      // });
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
