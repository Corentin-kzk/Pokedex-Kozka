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
  const banner = {
    width: "100%",
    backgroundColor: "#f6e652",
  };

  const { id } = useParams();

  let pokemon = usePokemonsByID(id);
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
  let evolution = useEvolutionsByID(id);


  return (
    <section className="pokemonContainer">
      <section style={banner}>
        <h1 style={{ color: "#3b3b3b" }}>{pokemon.name}</h1>
      </section>
      <section>
        <div className="style-stats">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            alt=""
          />
          <ul className="list-stats">
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
          {evolution && (
            <>
              <Card pokemon={evolution.chain?.species} />
              <Card pokemon={evolution.chain?.evolves_to[0].species} />
            </>
          )}
        </article>
      </section>
    </section>
  );
};

export default Pokemon;
