import { PokemonCard } from "./PokemonCard";

export function GridCards({ pokemonData, addPk }) {
  return (
    <>
      <ul className="gridCardsPokemon">
        {pokemonData.map((pk) => {
          return <PokemonCard key={pk.name} pokemon={pk} onAdd={addPk} />;
        })}
      </ul>
    </>
  );
}
