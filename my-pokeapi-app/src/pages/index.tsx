// pages/index.tsx
import { useEffect, useState } from 'react';
import getPokemonList from './api/pokeApi';

interface PokemonWithSprite {
  name: string;
  url: string;
  sprite: string;
}

export default function Home({ pokemonList }: { pokemonList: PokemonWithSprite[] }) {
  return (
    <div>
      <h1 className="title">Pokemon List</h1>
      <ul>
        {pokemonList.map((pokemon) => (
          <li key={pokemon.name}>
            <img src={pokemon.sprite} alt={pokemon.name} />
            {pokemon.name}
          </li>
        ))}
      </ul>

      <style jsx>{`
        .title {
          color: blue;
        }

        /* Other styles */
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  const pokemonList = await getPokemonList();
  return {
    props: { pokemonList },
  };
}
