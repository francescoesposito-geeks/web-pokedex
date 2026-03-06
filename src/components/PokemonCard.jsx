export function PokemonCard({ pokemon }) {
  return (
    <div className="pokemonCard">
      <li>
        <ul>
          <li>
            <b>nome: </b>
            {pokemon.name}
          </li>
        </ul>
      </li>
    </div>
  );
}
