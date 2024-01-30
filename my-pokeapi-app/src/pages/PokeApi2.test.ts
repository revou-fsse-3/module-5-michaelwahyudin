// pokeApi.test.ts
import { act, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import getPokemonList from './api/pokeApi';

jest.mock('axios');

describe('getPokemonList Hook', () => {
  it('fetches Pokemon list successfully', async () => {
    const mockData = {
      data: {
        results: [
          {
            name: 'ivysaur',
            url: 'https://pokeapi.co/api/v2/pokemon/2/',
          },
        ],
      },
    };

    const mockPokemonDetails = {
      data: {
        sprites: {
          front_default: 'http://localhost:3000/_next/image?url=https%3A%2F%2Fraw.githubusercontent.com%2FPokeAPI%2Fsprites%2Fmaster%2Fsprites%2Fpokemon%2F2.png&w=64&q=75',
        },
      },
    };

    (axios.get as jest.Mock)
      .mockResolvedValueOnce(mockData)
      .mockResolvedValueOnce(mockPokemonDetails);

    let result;

    await act(async () => {
      result = await getPokemonList();
    });

    expect(result).toEqual([
      {
        name: 'ivysaur',
        url: 'https://pokeapi.co/api/v2/pokemon/2/',
        sprite: 'http://localhost:3000/_next/image?url=https%3A%2F%2Fraw.githubusercontent.com%2FPokeAPI%2Fsprites%2Fmaster%2Fsprites%2Fpokemon%2F2.png&w=64&q=75',
      },
    ]);
  });

  // Add more tests for error cases or other scenarios
});
