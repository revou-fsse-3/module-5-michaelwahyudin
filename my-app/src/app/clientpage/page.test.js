// src/app/clientpage/page.test.js
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PokemonProvider } from '../context/PokemonContext';
import ClientPage from './page';

// Mocking the fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ results: [{ name: 'pokemon1' }, { name: 'pokemon2' }] }),
  })
);

test('ClientPage renders and fetches Pokemon data', async () => {
  render(
    <PokemonProvider>
      <ClientPage />
    </PokemonProvider>
  );

  // Loading message should be present before data is fetched
  expect(screen.getByText('Loading...')).toBeInTheDocument();

  // Wait for the data to be fetched and loaded
  await waitFor(() => {
    expect(screen.getByText('pokemon1')).toBeInTheDocument();
    expect(screen.getByText('pokemon2')).toBeInTheDocument();
  });
});

test('ClientPage handles user interaction', async () => {
  render(
    <PokemonProvider>
      <ClientPage />
    </PokemonProvider>
  );

  // Simulate user interaction (you might adjust this based on your actual user interactions)
  userEvent.click(screen.getByText('pokemon1'));

  // Assert the expected behavior based on user interaction
  expect(/* Your assertion based on the user interaction */).toBe(/* Expected result */);
});
