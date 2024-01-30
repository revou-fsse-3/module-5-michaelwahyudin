// pages/api/PokeApi.ts
import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2';

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonWithSprite extends Pokemon {
  sprite: string;
}

const getPokemonList = async (): Promise<PokemonWithSprite[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/pokemon`);
    const pokemonList: Pokemon[] = response.data.results;

    const pokemonWithSprites: PokemonWithSprite[] = await Promise.all(
      pokemonList.map(async (pokemon) => {
        const pokemonDetails = await axios.get(pokemon.url);
        const sprite = pokemonDetails.data.sprites.front_default;

        return { ...pokemon, sprite };
      })
    );

    return pokemonWithSprites;
  } catch (error) {
    console.error('Error fetching Pokemon list:', error);
    return [];
  }
};

export default getPokemonList;
