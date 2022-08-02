import React from 'react';
import { useSelector } from 'react-redux'
import CardContainer from '../Components/cardPokedex/CardContainer';

const Pokedex = () => {
    const pokedex = useSelector((state) => state.pokedex)
    return (
        <CardContainer pokemons={pokedex} />
    );
};

export default Pokedex;