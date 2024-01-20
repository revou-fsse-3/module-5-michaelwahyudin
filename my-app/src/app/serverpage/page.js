// src/app/serverpage/page.js
const ServerPage = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
  const data = await response.json();

  console.log(data); // Corrected log statement

  return (
    <div>
      <h1>Welcome to the Poke API Homepage</h1>
      {/* Display the data fetched during server-side rendering */}
      <ul>
        {data.results.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServerPage;
