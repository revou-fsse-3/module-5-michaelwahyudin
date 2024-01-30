import axios, { AxiosRequestConfig } from 'axios';
import getPokemonList from './api/pokeApi';

jest.mock('axios');

describe('getPokemonList', () => {
  it('fetches successfully data from an API', async () => {
    const mockedData = {
      data: {
        results: [
          { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
          // Add more mocked data as needed
        ],
      },
    };

    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue(mockedData);

    const result = await getPokemonList();

    // Assertions
    expect(axios.get).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon');
    expect(result).toEqual([
      { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
      // Add expected results as needed
    ]);
  });

  it('handles errors during API fetch', async () => {
    const errorMessage = 'Network Error';
    (axios.get as jest.MockedFunction<typeof axios.get>).mockRejectedValue(new Error(errorMessage));

    await expect(getPokemonList()).rejects.toThrow(errorMessage);
  });
});
