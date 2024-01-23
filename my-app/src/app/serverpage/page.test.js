// src/app/serverpage/__tests__/ServerPage.test.js
import { render, screen } from '@testing-library/react';
import ServerPage from './page';

// Mock the fetch function to return the desired data
jest.mock('node-fetch');
const fetchMock = require('node-fetch');

test('renders ServerPage component with fetched data', async () => {
  // Mock the response data
  const mockData = {
    results: [
      { name: 'bulbasaur' },
      { name: 'ivysaur' },
      // ... add more data as needed
    ],
  };

  // Set up the fetch mock to resolve with the mock data
  fetchMock.mockResolvedValueOnce({
    json: jest.fn().mockResolvedValueOnce(mockData),
  });

  // Render the component
  render(<ServerPage />);

  // Wait for the fetch to resolve and the component to render
  await screen.findByText('Welcome to the Poke API Homepage');

  // Verify that the component renders the fetched data
  mockData.results.forEach((pokemon) => {
    expect(screen.getByText(pokemon.name)).toBeInTheDocument();
  });
});
