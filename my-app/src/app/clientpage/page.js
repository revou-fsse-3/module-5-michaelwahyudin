// src/app/clientpage/page.js
const ClientPage = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
  const data = await response.json();

  console.log(data);

  return (
    <div>
      <h1>Welcome to the Poke API Homepage</h1>
      {/* Display the data fetched during client-side rendering */}
      <ul>
        {data.results.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ClientPage;
