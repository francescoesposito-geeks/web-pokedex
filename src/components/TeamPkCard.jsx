export function TeamPkCard({ pokemon, onRemove }) {
  return (
    <div className="pokemonCard">
      <li>
        <ul>
          <li>
            <img src={pokemon.sprites.front_default} alt="image-pokemon" />
          </li>
          <li>
            <b>id: </b>
            {pokemon.idUnic}
          </li>
          <li>
            <b>nome: </b>
            {pokemon.name}
          </li>
          <li>
            <b>height: </b> {pokemon.height * 10 + "cm"}
          </li>
          <li>
            <b>weight: </b> {pokemon.weight / 10 + "kg"}
          </li>
          <li>
            <b>type: </b>
            {pokemon.types[0].type.name}
          </li>
          <li>
            <button onClick={() => onRemove(pokemon)}>-</button>
          </li>
        </ul>
      </li>
    </div>
  );
}
