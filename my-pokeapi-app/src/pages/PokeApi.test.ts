import axios, { AxiosRequestConfig } from 'axios';
import getPokemonList from './api/pokeApi';

jest.mock('axios');

describe('getPokemonList', () => {
  it('fetches successfully data from an API', async () => {
    const mockedData = {
      data: {
        results: [
          { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
          { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
        ],
      },
    };

    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue(mockedData);

    const result = await getPokemonList();

    expect(axios.get).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon');
    expect(result).toEqual([
      { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/', sprite: expect.any(String) },
      { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/', sprite: expect.any(String) },
    ]);
  });

  it('handles errors during API fetch', async () => {
    const errorMessage = 'Network Error';
    (axios.get as jest.MockedFunction<typeof axios.get>).mockRejectedValue(new Error(errorMessage));

    await expect(getPokemonList()).rejects.toThrow(errorMessage);

    await expect(getPokemonList()).resolves.toEqual([]);
  });
});