// pages/index.tsx
import { useEffect, useState } from 'react';
import getPokemonList from './api/pokeApi';
import Image from 'next/image';

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
            <Image
              src={pokemon.sprite}
              alt={pokemon.name}
              width={50} // set the width of the image as needed
              height={50} // set the height of the image as needed
            />
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
