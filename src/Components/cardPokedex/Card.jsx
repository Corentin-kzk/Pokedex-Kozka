import React, { useState } from "react";
import "./card.css";
import { Link } from "react-router-dom";
import pokeBall from "../../assets/pokeBall.svg";
import { useDispatch ,useSelector} from "react-redux";
import BookMark from "../bookMark/BookMark";

const getTheId = (url) => {
  let splitedUrl = url.split("/").map((element) => element.trim());
  return splitedUrl[6];
};

const Card = ({ pokemon }) => {
 
  const pokedex = useSelector((state) => state.pokedex);

  const dispatch = useDispatch();
  const isPresent = pokedex.find((pokedex) => pokedex.name === pokemon.name);

  const id = getTheId(pokemon.url);

  return (
    <>
      <div className="card">
        <h2 className="card-title">{pokemon.name}</h2>
        <img
          className="image"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          alt="Pokemon Image"
        />
        <Link className="detail-btn" to={`/pokemon/${id}`}>
          <div className="detail-div">
            <img className="button-more" src={pokeBall} alt="Details Button" />
            <span>Details</span>
          </div>
        </Link>
        <BookMark isPresent={isPresent} pokemon={pokemon}/>
      </div>
    </>
  );
};

export default Card;
