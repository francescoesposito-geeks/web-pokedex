export function PokemonCardDetails({ pokemon }) {
  return (
    <div className="containerPokemonDetails">
      <ul className="listImgDefaultPkDetails">
        <li>
          <img
            className="imgDetails"
            src={pokemon.sprites.front_default}
            alt="image-pokemon"
          />
        </li>
        <li>
          <img
            className="imgDetails"
            src={pokemon.sprites.back_default}
            alt=""
          />
        </li>
      </ul>
      <ul className="listPokemonDetails">
        <li>
          <p>
            <b>id:</b> {pokemon.id}
          </p>
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
          {pokemon.types[0].type.name}
        </li>
        <li>
          <p>
            <b>abilities: </b>
            {pokemon.abilities[0].ability.name}
          </p>
        </li>
        <li>
          <b>moves: </b>
          {pokemon.moves[0].move.name}
        </li>
      </ul>
      <ul className="listImgShyniPkDetails">
        <li>
          <img
            className="imgDetails"
            src={pokemon.sprites.front_shiny}
            alt=""
          />
        </li>
        <li>
          <img className="imgDetails" src={pokemon.sprites.back_shiny} alt="" />
        </li>
      </ul>
    </div>
  );
}
