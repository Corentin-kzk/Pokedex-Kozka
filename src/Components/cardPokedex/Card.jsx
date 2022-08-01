import React from "react";
import "./card.css";

const getTheId = (url) => {
  let splitedUrl = url.split("/").map((element) => element.trim());
  return splitedUrl[6];
};

const Card = ({ pokemon }) => {
  return (
    <div className="card">
      <h2 className="card-title">{pokemon.name}</h2>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getTheId(
          pokemon.url
        )}.png`}
        alt=""
      />
      <p className="card-desc">
        The lion (Panthera leo) is a species in the family Felidae and a member
        of the genus Panthera. It has a muscular, deep-chested body, short,
        rounded head, round ears, and a hairy tuft at the end of its tail. It is
        sexually dimorphic; adult male lions have a prominent mane.
      </p>
    </div>
  );
};

export default Card;
