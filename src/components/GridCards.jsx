import { PokemonCard } from "./PokemonCard";

export function GridCards({ pokemonData, addPk }) {
  return (
    <>
      <ul className="gridCardsPokemon">
        {pokemonData.map((pk, index) => {
          return <PokemonCard key={index} pokemon={pk} onAdd={addPk} />;
        })}
      </ul>
    </>
  );
}
