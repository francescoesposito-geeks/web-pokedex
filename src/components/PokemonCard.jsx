import { useContext, useState } from "react";
import { Link } from "react-router";
import { TeamContext } from "../context/TeamContext";
import { usePokemonOpenDetails } from "../hooks/usePokemonOpenDetail";
import { buildDinamicPath } from "../routes/paths";
import {
  formatHeight,
  formatPokedexNumber,
  formatWeight,
  getIdFromUrl,
  getSpriteUrl,
} from "../utils/pokemon";
import { TypeBadges } from "./TypeBadges";

export function PokemonCard({ pokemon }) {
  const [isOpen, setOpen] = useState(false);
  const { addPokemonToTeam } = useContext(TeamContext);
  const { detail, loading, error, fetchDetail } =
    usePokemonOpenDetails(pokemon);
  const id = getIdFromUrl(pokemon.url);
  const panelId = `details-${pokemon.name}`;

  function handleClick() {
    fetchDetail();
    setOpen(!isOpen);
  }

  return (
    <article className={isOpen ? "pokemonCard isOpen" : "pokemonCard"}>
      <span className="pokedexNumber">{formatPokedexNumber(id)}</span>
      <img
        className="cardSprite"
        src={getSpriteUrl(id)}
        alt=""
        width="96"
        height="96"
        loading="lazy"
      />
      <h2 className="pokemonName">{pokemon.name}</h2>
      <button
        type="button"
        className="expandButton"
        onClick={handleClick}
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        {isOpen ? "Hide details" : "Show details"}
      </button>

      {isOpen && (
        <div className="cardIsOpen" id={panelId}>
          {loading && <p className="cardMessage">Loading…</p>}
          {error && (
            <p className="cardMessage errorText" role="alert">
              Details could not be loaded. Try again later.
            </p>
          )}
          {detail && (
            <>
              <TypeBadges types={detail.types} />
              <dl className="cardFacts">
                <div>
                  <dt>Height</dt>
                  <dd>{formatHeight(detail.height)}</dd>
                </div>
                <div>
                  <dt>Weight</dt>
                  <dd>{formatWeight(detail.weight)}</dd>
                </div>
              </dl>
              <div className="bottomPokemonCardButtons">
                <button
                  type="button"
                  className="primaryButton"
                  onClick={() => addPokemonToTeam(detail)}
                >
                  Add to team
                </button>
                <Link
                  className="secondaryButton"
                  to={buildDinamicPath.pokemonDetail(detail.id)}
                >
                  Full profile
                </Link>
              </div>
            </>
          )}
        </div>
      )}
    </article>
  );
}
