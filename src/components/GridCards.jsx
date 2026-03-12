import { PokemonCard } from "./PokemonCard";

export function GridCards({ pokemonData }) {
  return (
    <>
      <ul className="gridCardsPokemon">
        {pokemonData.map((pk, index) => {
          return <PokemonCard key={index} pokemon={pk} />;
        })}
      </ul>
    </>
  );
}
