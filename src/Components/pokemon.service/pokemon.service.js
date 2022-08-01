import { useState, useEffect } from 'react';
import axios from 'axios';

export function usePokemons() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/');
            setPokemons(data.results);
        }
        fetchData();
    }, []); 

    return pokemons;
}

export function usePokemonsByID(id) {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            setPokemon(data.results);
        }
        fetchData();
    }, []);
    return pokemon;
}