import React from 'react';
import { usePokemons } from "../pokemon.service/pokemon.service";
import Card from './Card';

const CardContainer = () => {
    const pokemons = usePokemons();
    return (
        <div className="cards">
            {pokemons.map((pokemon,index) => <Card pokemon={pokemon} key={Date.now()+index} />)}
        </div>
    );
};

export default CardContainer;