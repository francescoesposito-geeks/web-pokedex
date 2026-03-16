export function TeamPkCard({ pokemon, onRemove }) {
  return (
    <li className="teamPokemonCard">
      <button className="cardButton" onClick={() => onRemove(pokemon.idUnic)}>
        -
      </button>
      <ul className="ulTeamPokemonCard">
        <li>
          <img src={pokemon.sprites.front_default} alt="image-pokemon" />
        </li>
        <li>
          <b>id: </b>
          {pokemon.idUnic}
        </li>
        <li>
          <b>name: </b>
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
          <ul>
            {pokemon.types.map((t, index) => {
              return (
                <li key={index}>
                  {index + 1} - {t.type.name}
                </li>
              );
            })}
          </ul>
        </li>
      </ul>
    </li>
  );
}
