export function TeamPkCard({ pokemon, onRemove }) {
  console.log("sei qua ", pokemon);

  return (
    <div className="pokemonCard">
      <li>
        <ul>
          <li>
            <b>nome: </b>
            {pokemon.name}
          </li>
          <li>
            <b>height: </b> {pokemon.height}
          </li>
          <li>
            <b>weight: </b> {pokemon.weight}
          </li>
          <li>
            <b>type: </b>
            {pokemon.types[0].type.name}
          </li>
          <li>
            <img src={pokemon.sprites.front_default} alt="image-pokemon" />
          </li>
          <li>
            <button onClick={() => onRemove(pokemon)}>-</button>
          </li>
        </ul>
      </li>
    </div>
  );
}
