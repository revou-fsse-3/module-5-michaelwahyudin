// src/app/context/PokemonContext.js
import React, { createContext, useContext, useState } from 'react';

const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [pokemonData, setPokemonData] = useState([]);

  const setPokemon = (data) => {
    setPokemonData(data);
  };

  return (
    <PokemonContext.Provider value={{ pokemonData, setPokemon }}>
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemonContext = () => {
  return useContext(PokemonContext);
};
