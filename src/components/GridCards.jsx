import { PokemonCard } from "./PokemonCard";

export function GridCards({ pokemonData, add }) {
  return (
    <>
      <ul className="gridCardsPokemon">
        {pokemonData.map((pk) => {
          return <PokemonCard key={pk.name} pokemon={pk} onAdd={add} />;
        })}
      </ul>
    </>
  );
}
