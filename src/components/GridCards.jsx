import { PokemonCard } from "./PokemonCard";

export function GridCards({ pokemonData }) {
  return (
    <>
      {pokemonData.map((pokemon) => {
        return <PokemonCard pokemon={pokemon} />;
      })}
    </>
  );
}
