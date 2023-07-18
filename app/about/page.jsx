async function getPokemons() {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon`);
  return res.json();
}

export default async function About() {
  const { results } = await getPokemons();
  console.log(results);

  return (
    <>
      About Page
      <ul>
        {results.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </>
  );
}
