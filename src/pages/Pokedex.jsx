import React from "react";
import { useSelector } from "react-redux";
import CardContainer from "../Components/cardContainer/CardContainer";
import Loader from "../Components/loader/Loader";

const Pokedex = ({ search }) => {
  let pokedex = useSelector((state) => state.pokedex);
  if (search) {
    let re = new RegExp(search + ".+$", "i");
    pokedex = pokedex.filter(function (e, i, a) {
      return e.name.search(re) != -1;
    });
  }
  console.log(pokedex);
  return <CardContainer pokemons={pokedex} />;
};

export default Pokedex;
