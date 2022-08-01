import React from "react";
import "./card.css";

const getTheId = (url) => {
    let splitedUrl = url.split('/').map(element => element.trim());
    console.log(splitedUrl[6]);
}   

const Card = ({pokemon}) => {
    console.log(pokemon);
    getTheId(pokemon.url)
  return (
    <div className="card">
      <h2 className="card-title">{pokemon.name}</h2>
      <img
        src={`https://github.com/PokeAPI/sprites/tree/master/sprites/pokemon/+ ${getTheId(pokemon.url)}`}
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
