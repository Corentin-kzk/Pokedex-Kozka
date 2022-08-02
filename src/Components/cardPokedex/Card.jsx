import React from "react";
import "./card.css";
import { Link } from "react-router-dom";
import pokeBall from "../../assets/pokeBall.svg";
import {useDispatch } from "react-redux";
import { add, remove} from "../../reducer/pokedexReducer";

const getTheId = (url) => {
  let splitedUrl = url.split("/").map((element) => element.trim());
  return splitedUrl[6];
};

const Card = ({ pokemon }) => {
  const dispatch = useDispatch();
  const id = getTheId(pokemon.url);
  return (
    <div className="card">
      <h2 className="card-title">{pokemon.name}</h2>
      <img
        className="image"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
        alt="Pokemon Image"
      />
      <p className="card-desc">
        <Link to={`/pokemon/${id}`}>
          <img className="button-more" src={pokeBall} alt="Details Button" />
        </Link>
        <button onClick={() => dispatch(add(pokemon))}>
          click to save pokemon in pokedex
        </button>
        <button onClick={() => dispatch(remove(pokemon))}>
          click to remove pokemon in pokedex
        </button>
      </p>
    </div>
  );
};

export default Card;
