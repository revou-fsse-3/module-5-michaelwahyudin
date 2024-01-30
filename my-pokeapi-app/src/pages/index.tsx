import { useEffect, useState } from 'react';
import getPokemonList from './api/pokeApi';
import Image from 'next/image';

interface PokemonWithSprite {
  name: string;
  url: string;
  sprite: string;
}

export default function Home({ pokemonList }: { pokemonList?: PokemonWithSprite[] }) {
  const [pokemons, setPokemons] = useState<PokemonWithSprite[]>([]);

  useEffect(() => {
    if (!pokemonList) {
      getPokemonList().then((pokemonList) => setPokemons(pokemonList));
    } else {
      setPokemons(pokemonList);
    }
  }, [pokemonList]);

  return (
    <div>
      <h1 className="title">Pokemon List</h1>
      <ul>
        {pokemons.map((pokemon) => (
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