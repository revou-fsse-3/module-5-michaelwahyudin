// pages/api/PokeApi.ts
import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2';

interface Pokemon {
  name: string;
}

const getPokemonList = async (): Promise<Pokemon[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/pokemon`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching Pokemon list:', error);
    return [];
  }
};

export default getPokemonList;
