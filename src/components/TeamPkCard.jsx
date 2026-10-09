import { Link } from "react-router";
import { buildDinamicPath } from "../routes/paths";
import {
  formatHeight,
  formatPokedexNumber,
  formatWeight,
} from "../utils/pokemon";
import { TypeBadges } from "./TypeBadges";

export function TeamPkCard({ pokemon, onRemove }) {
  return (
    <article className="teamPokemonCard">
      <span className="pokedexNumber">{formatPokedexNumber(pokemon.id)}</span>
      <img
        className="cardSprite"
        src={pokemon.sprite}
        alt=""
        width="96"
        height="96"
      />
      <h2 className="pokemonName">
        <Link to={buildDinamicPath.pokemonDetail(pokemon.id)}>
          {pokemon.name}
        </Link>
      </h2>
      <TypeBadges types={pokemon.types} />
      <dl className="cardFacts">
        <div>
          <dt>Height</dt>
          <dd>{formatHeight(pokemon.height)}</dd>
        </div>
        <div>
          <dt>Weight</dt>
          <dd>{formatWeight(pokemon.weight)}</dd>
        </div>
      </dl>
      <button
        type="button"
        className="secondaryButton"
        onClick={() => onRemove(pokemon.idUnic)}
      >
        Remove from team
      </button>
    </article>
  );
}
