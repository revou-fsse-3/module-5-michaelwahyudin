// src/app/clientpage/page.js
import React, { useEffect } from 'react';
import { usePokemonContext, PokemonProvider } from '../context/PokemonContext';

const fetchData = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
  const data = await response.json();
  return data.results;
};

const PokemonList = () => {
  const { pokemonData, setPokemon } = usePokemonContext();

  useEffect(() => {
    const fetchPokemonData = async () => {
      const data = await fetchData();
      setPokemon(data);
    };

    if (pokemonData.length === 0) {
      fetchPokemonData();
    }
  }, [pokemonData, setPokemon]);

  return (
    <div>
      <h1>Welcome to the Poke API Homepage</h1>
      <ul>
        {pokemonData.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};

const ClientPage = () => {
  return (
    <PokemonProvider>
      <PokemonList />
    </PokemonProvider>
  );
};

export default ClientPage;
