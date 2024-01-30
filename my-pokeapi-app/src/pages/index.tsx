// pages/index.tsx
import { useEffect, useState } from 'react';
import getPokemonList from './api/PokeApi';

interface Pokemon {
  name: string;
}

export default function Home() {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchPokemonList = async () => {
      const list = await getPokemonList();
      setPokemonList(list);
    };

    fetchPokemonList();
  }, []);

  return (
    <div>
      <h1>Pokemon List</h1>
      <ul>
        {pokemonList.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}
