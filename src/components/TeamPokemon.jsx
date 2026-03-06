import { PokemonCard } from "./PokemonCard";

export function TeamPokemon({ pokemonArray }) {
  return (
    <>
      <div className="title second-title">
        <h2>TEAM POKEMON</h2>
      </div>
      <ul className="gridCardsPokemon">
        {pokemonArray.map((pk) => {
          return <PokemonCard key={pk.name} pokemon={pk} />;
        })}
      </ul>
    </>
  );
}
