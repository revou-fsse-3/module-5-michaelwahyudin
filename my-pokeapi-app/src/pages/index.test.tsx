import { act, render, screen } from '@testing-library/react';
import Home from './index'; // Adjust the path accordingly
import * as pokeApi from './api/pokeApi';

jest.mock('../api/pokeApi');

const mockPokemonList = [
  {
    name: 'bulbasaur',
    url: 'https://pokeapi.co/api/v2/pokemon/1/',
    sprite: 'http://localhost:3000/_next/image?url=https%3A%2F%2Fraw.githubusercontent.com%2FPokeAPI%2Fsprites%2Fmaster%2Fsprites%2Fpokemon%2F1.png&w=64&q=75',
  },
];

describe('Home Component', () => {
  it('renders Pokemon list from API', async () => {
    (pokeApi.default as jest.Mock).mockResolvedValue(mockPokemonList);

    let component;

    await act(async () => {
      component = render(<Home />);
    });

    const bulbasaurElement = screen.getByText('bulbasaur');
    const imageElement = screen.getByAltText('bulbasaur');

    expect(bulbasaurElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
  });

  it('renders Pokemon list from props', async () => {
    const pokemonList = [
      {
        name: 'charmander',
        url: 'https://pokeapi.co/api/v2/pokemon/4/',
        sprite: 'http://localhost:3000/_next/image?url=https%3A%2F%2Fraw.githubusercontent.com%2FPokeAPI%2Fsprites%2Fmaster%2Fsprites%2Fpokemon%2F4.png&w=64&q=75',
      },
    ];

    let component;

    await act(async () => {
      component = render(<Home pokemonList={pokemonList} />);
    });

    const charmanderElement = screen.getByText('charmander');
    const charmanderImageElement = screen.getByAltText('charmander');

    expect(charmanderElement).toBeInTheDocument();
    expect(charmanderImageElement).toBeInTheDocument();
  });
});
