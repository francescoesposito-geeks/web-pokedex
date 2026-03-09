import { TeamPkCard } from "./TeamPkCard";

export function TeamPokemon({ pokemonArray, removePk }) {
  return (
    <>
      <div className="title second-title">
        <h2>TEAM POKEMON</h2>
      </div>
      <ul className="gridCardsPokemon">
        {pokemonArray.map((pk) => (
          <TeamPkCard key={pk.idUnic} pokemon={pk} onRemove={removePk} />
        ))}
      </ul>
    </>
  );
}
