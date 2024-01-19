// src/app/serverPage.js
const ServerPage = ({ pokemonData }) => (
  <div>
    <h1>Welcome to the Poke API Homepage</h1>
    {/* Display the data fetched during server-side rendering */}
    <ul>
      {pokemonData.map((pokemon, index) => (
        <li key={index}>{pokemon.name}</li>
      ))}
    </ul>
  </div>
);

export async function getServerSideProps() {
  // Fetch data during server-side rendering
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
  const data = await response.json();

  return {
    props: {
      pokemonData: data.results,
    },
  };
}

export default ServerPage;
