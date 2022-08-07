import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  usePokemonsByID,
  useEvolutionsByID,
  useSpeciesByID,
  getEvolutions,
} from "../Components/pokemon.service/pokemon.service";
import ProgressBar from "../Components/progressBar/ProgressBar";
import ListType from "../Components/list/ListType";
import "./pokemon.css";
import ListAbylities from "../Components/list/ListAbylities";
import Card from "../Components/cardPokedex/Card";
import Loader from "../Components/loader/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import {
  faVenus,
  faMars,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import BookMark from "../Components/bookMark/BookMark";

const Pokemon = () => {
  const [chain, setChain] = useState(null);
  const [evol, setSEvol] = useState(null);

  const banner = {
    width: "100%",
    backgroundColor: "#f6e652",
    padding: 10,
    margin: "2% 0%",
  };
  //get the URL param ID
  const { id } = useParams();
  //get pokemons in Redux
  const pokedex = useSelector((state) => state.pokedex);
  //get data with API (pokemon and species)
  const pokemon = usePokemonsByID(id);
  const species = useSpeciesByID(id);

  useEffect(() => {
    if (!species) return;
    //get the id in url
    const pokeID = Number(species.evolution_chain.url.split("/").reverse()[1]);
    //get evolution chain with API and custom function
    const getEvolutionChain = async () => {
      const { chain } = await useEvolutionsByID(pokeID);
      setChain(chain);
    };
    getEvolutionChain();
  }, [species]);

  useEffect(() => {
    if (!chain) return;
    const evol = getEvolutions(chain);
    setSEvol(evol);
  }, [chain]);

  if (pokemon && species && evol) {
    const abilities = pokemon.abilities;
    const stats = pokemon.stats;
    const types = pokemon.types;
    //check if we have pokemon in pokedex
    const isPresent = pokedex.find((pokedex) => pokedex.name === pokemon.name);

    //calculate te percent of femal
    let genderPercentOfFemal;
    if (species.gender_rate == -1) {
      genderPercentOfFemal = -1;
    } else genderPercentOfFemal = (species.gender_rate / 8) * 100;

    return (
      <section className="pokemonContainer details-page" >
        <section style={banner}>
          <h1 style={{ color: "#3b3b3b" }}>{pokemon.name}</h1>
          <BookMark
            isPresent={isPresent}
            pokemon={{ name: pokemon.name, url: pokemon.url }}
          />
        </section>
        <section>
          <div className="style-stats">
            <img
              className="details-image"
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
                <li>height: {pokemon.height} m</li>
                <li>
                  eggs Group :
                  {species.egg_groups.map((list, index) => (
                    <span
                      key={Date.now() + index}
                      style={{ margin: "0px 5px" }}
                    >
                      {list.name}
                    </span>
                  ))}
                </li>
                <li>location : {species.habitat.name}</li>
              </ul>
              <ul className="profile-list">
                <li>weight: {pokemon.weight} kg</li>
                <li>
                  Capture rate : {Math.ceil((species.capture_rate / 255) * 100)}
                  %
                </li>
                <li>
                  gender : {genderPercentOfFemal}%{" "}
                  <FontAwesomeIcon icon={faVenus} /> /{" "}
                  {genderPercentOfFemal != -1 ? 100 - genderPercentOfFemal : 0}
                  % <FontAwesomeIcon icon={faMars} />
                </li>
              </ul>
            </div>

            <div>
              <h3> abilities :</h3>
              <ListAbylities list={abilities} />
            </div>
          </article>
          <article>
            <h2 style={banner}>Evolutions</h2>
            <div className="Pokemon-evolution">
              {evol.map((pokemon, index) => (
                <>
                  <Card pokemon={pokemon} key={Date.now() + index} />
                  <FontAwesomeIcon icon={faArrowRight} />
                </>
              ))}
            </div>
          </article>
        </section>
      </section>
    );
  } else return <Loader />;
};

export default Pokemon;
