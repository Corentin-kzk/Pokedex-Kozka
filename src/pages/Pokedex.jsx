import React from "react";
import { useSelector } from "react-redux";
import CardContainer from "../Components/cardContainer/CardContainer";

const Pokedex = ({search}) => {
  let pokedex = useSelector((state) => state.pokedex);
  if (search) {
    let re = new RegExp(search + ".+$", "i");
    pokedex = pokedex.filter(function (e, i, a) {
      return e.name.search(re) != -1;
    });
  }
  return <CardContainer pokemons={pokedex} />;
};

export default Pokedex;
