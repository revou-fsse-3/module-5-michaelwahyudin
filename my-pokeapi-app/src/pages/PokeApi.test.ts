    import axios from 'axios';
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

        (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce(mockedData);

        const mockedPokemonDetailsDataBulbasaur = {
        data: {
            sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
            },
        },
        };

        const mockedPokemonDetailsDataIvysaur = {
        data: {
            sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
            },
        },
        };

        // Mock the response for both 'bulbasaur' and 'ivysaur'
        (axios.get as jest.MockedFunction<typeof axios.get>)
        .mockResolvedValueOnce(mockedPokemonDetailsDataBulbasaur)
        .mockResolvedValueOnce(mockedPokemonDetailsDataIvysaur);

        const result = await getPokemonList();

        expect(axios.get).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon');
        expect(axios.get).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/1/');
        expect(axios.get).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/2/');

        expect(result).toEqual([
        {
            name: 'bulbasaur',
            url: 'https://pokeapi.co/api/v2/pokemon/1/',
            sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        },
        {
            name: 'ivysaur',
            url: 'https://pokeapi.co/api/v2/pokemon/2/',
            sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
        },
        ]);
    });

    it('handles errors during API fetch', async () => {
        const errorMessage = 'Network Error';
        (axios.get as jest.MockedFunction<typeof axios.get>).mockRejectedValue(new Error(errorMessage));
    
// Previous test code
await expect(getPokemonList()).rejects.toThrow(`Error fetching Pokemon list:`);



    });

});

it('handles errors during API fetch', async () => {
    const errorMessage = 'Network Error';
    (axios.get as jest.MockedFunction<typeof axios.get>).mockRejectedValue(new Error(errorMessage));
  
    await expect(getPokemonList()).rejects.toThrow(`Error fetching Pokemon list: ${errorMessage}`);
  });