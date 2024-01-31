import { render, screen } from '@testing-library/react';
import Home from './index';

const mockPokemonList = [
  { name: 'Bulbasaur', sprite: 'bulbasaur-sprite-url' },
  { name: 'Charmander', sprite: 'charmander-sprite-url' },
  // Add more mock data as needed
];

jest.mock('./api/pokeApi', () => ({
  __esModule: true,
  default: jest.fn(() => Promise.resolve(mockPokemonList)),
}));

describe('Home', () => {
  it('renders Pokemon list', async () => {
    render(<Home />);
    
    // Wait for the component to render the Pokemon list
    const pokemonListItems = await screen.findAllByRole('listitem');

    expect(pokemonListItems).toHaveLength(mockPokemonList.length);

    // Add more assertions based on your component's behavior
  });
});
