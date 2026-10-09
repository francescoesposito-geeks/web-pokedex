import { PokemonCard } from "./PokemonCard";

export function GridCards({ pokemonData }) {
  return (
    <ul className="gridCardsPokemon">
      {pokemonData.map((pk) => (
        <li key={pk.name}>
          <PokemonCard pokemon={pk} />
        </li>
      ))}
    </ul>
  );
}
