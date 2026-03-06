import { PokemonCard } from "./PokemonCard";

export function GridCards({ pokemonData }) {
  return (
    <>
      <ul className="gridCardsPokemon">
        {pokemonData.map((pk) => {
          return <PokemonCard pokemon={pk} />;
        })}
      </ul>
    </>
  );
}
