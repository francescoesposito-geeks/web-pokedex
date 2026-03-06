export function PokemonCard({ pokemon }) {
  return (
    <div className="pokemonCard">
      <li>
        <ul>
          <li>
            <b>nome: </b>
            {pokemon.name}
          </li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </li>
    </div>
  );
}
