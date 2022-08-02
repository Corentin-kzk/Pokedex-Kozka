import React from "react";
import "./card.css";
import { Link } from "react-router-dom";

const getTheId = (url) => {
  let splitedUrl = url.split("/").map((element) => element.trim());
  return splitedUrl[6];
};

const Card = ({ pokemon }) => {
  const id = getTheId(
    pokemon.url
  );
  return (
    <div className="card">
      <h2 className="card-title">{pokemon.name}</h2>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
        alt=""
      />
      <p className="card-desc">
      <Link to={`/pokemon/${id}`}>
        En savoir plus
      </Link>
      </p>
    </div>
  );
};

export default Card;
