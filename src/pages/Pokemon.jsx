import React from "react";
import { useParams } from "react-router-dom";
import {
  usePokemonsByID,
  useEvolutionsByID,
} from "../Components/pokemon.service/pokemon.service";
import ProgressBar from "../Components/progressBar/ProgressBar";
import ListType from "../Components/list/ListType";

import "./pokemon.css";
import ListAbylities from "../Components/list/ListAbylities";
import Card from "../Components/cardPokedex/Card";

const Pokemon = () => {
  // STYLE
  const pokemonContainer = {
    width: "calc(100% - 200px)",
    padding: 10,
  };

  const banner = {
    width: "100%",
    backgroundColor: "#f6e652",
  };

  const styleStats = {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-around",
  };

  const listStats = {
    width: "60%",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
  };

  const { id } = useParams();

  let pokemon = usePokemonsByID(id);
  let evolution = useEvolutionsByID(id);
  // get abilities
  let abilities = [];
  if (pokemon.abilities) {
    abilities = pokemon.abilities;
  }
  //get stats
  let stats = [];
  if (pokemon.stats) {
    stats = pokemon.stats;
  }
  //get types
  let types = [];
  if (pokemon.types) {
    types = pokemon.types;
  }

  console.log(evolution.chain.species);
  return (
    <section style={pokemonContainer}>
      <section style={banner}>
        <h1 style={{ color: "#3b3b3b" }}>{pokemon.name}</h1>
      </section>
      <section>
        <div style={styleStats}>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            alt=""
          />
          <ul style={listStats}>
            {stats.map((stat, index) => (
              <li style={{ width: "100%" }} key={Date.now() + index}>
                <ProgressBar
                  bgcolor={"#d94d3a"}
                  name={stat.stat.name}
                  completed={stat.base_stat}
                />
              </li>
            ))}
          </ul>
        </div>

        <article>
          <h2 style={banner}>Profile</h2>
          <div>
            <h3>Types :</h3>
            <ListType list={types} />
          </div>
          <div className="list-container">
            <ul className="profile-list">
              <li>height: {pokemon.height}m</li>
            </ul>
            <ul className="profile-list">
              <li>weight: {pokemon.weight}kg</li>
            </ul>
          </div>
          <div>
            <h3> abilities :</h3>
            <ListAbylities list={abilities} />
          </div>
        </article>
        <article>
          <h2 style={banner}>Evolutions</h2>
          <Card pokemon={evolution.chain.species}/>
          <Card pokemon={evolution.chain.evolves_to[0].species}/>
         
        </article>
      </section>
    </section>
  );
};

export default Pokemon;
