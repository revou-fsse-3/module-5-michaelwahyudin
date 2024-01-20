// src/app/clientPage.js
import React, { useEffect, useState } from 'react';

const ClientPage = () => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    // Fetch data on the client side
    const fetchData = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
        const data = await response.json();
        setPokemonData(data.results);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Welcome to the Poke API Homepage</h1>
      {/* Display the data fetched on the client side */}
      <ul>
        {pokemonData.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ClientPage;
