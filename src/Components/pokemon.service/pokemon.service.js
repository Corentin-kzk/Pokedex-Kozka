import { useState, useEffect } from 'react';
import axios from 'axios';

export function usePokemons() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/');
            setPokemons(data);
        }
        fetchData();
    }, []); 
    return pokemons;
}

export function usePokemonsByID(id) {
    const [pokemon, setPokemon] = useState([]);
    useEffect(() => {
        async function fetchData(id) {
            const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
            setPokemon(data);
        }
        fetchData(id);
    }, []);
    return pokemon;
}


export function useEvolutionsByID(id) {
    const [evolution, setEvolution] = useState([]);
    useEffect(() => {
        async function fetchData(id) {
            const { data } = await axios.get(`https://pokeapi.co/api/v2/evolution-chain/${id}/`);
            setEvolution(data);
        }
        fetchData(id);
    }, []);
    return evolution;
}
