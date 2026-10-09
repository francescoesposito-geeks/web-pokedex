import {
  formatApiName,
  formatHeight,
  formatPokedexNumber,
  formatWeight,
} from "../utils/pokemon";
import { TypeBadges } from "./TypeBadges";

const MAX_BASE_STAT = 255;

export function PokemonCardDetails({ pokemon, onAdd }) {
  const artwork =
    pokemon.sprites.other?.["official-artwork"]?.front_default ??
    pokemon.sprites.front_default;

  const gallery = [
    { label: "Front", src: pokemon.sprites.front_default },
    { label: "Back", src: pokemon.sprites.back_default },
    { label: "Shiny front", src: pokemon.sprites.front_shiny },
    { label: "Shiny back", src: pokemon.sprites.back_shiny },
  ].filter((sprite) => sprite.src);

  return (
    <article className="containerPokemonDetails">
      <div className="detailsArtwork">
        <img src={artwork} alt={`Artwork of ${pokemon.name}`} />
      </div>

      <div className="detailsInfo">
        <p className="pokedexNumber">{formatPokedexNumber(pokemon.id)}</p>
        <h1 className="detailsName">{pokemon.name}</h1>
        <TypeBadges types={pokemon.types} />

        <dl className="listPokemonDetails">
          <div>
            <dt>Height</dt>
            <dd>{formatHeight(pokemon.height)}</dd>
          </div>
          <div>
            <dt>Weight</dt>
            <dd>{formatWeight(pokemon.weight)}</dd>
          </div>
          <div>
            <dt>Abilities</dt>
            <dd>
              {pokemon.abilities
                .map(
                  (a) =>
                    formatApiName(a.ability.name) +
                    (a.is_hidden ? " (hidden)" : ""),
                )
                .join(", ")}
            </dd>
          </div>
          <div>
            <dt>Moves</dt>
            <dd>{pokemon.moves.length} moves it can learn</dd>
          </div>
        </dl>

        <button type="button" className="primaryButton" onClick={onAdd}>
          Add to team
        </button>
      </div>

      <section className="detailsStats" aria-labelledby="stats-title">
        <h2 id="stats-title">Base stats</h2>
        <dl className="statList">
          {pokemon.stats.map((s) => (
            <div key={s.stat.name} className="statRow">
              <dt>{formatApiName(s.stat.name)}</dt>
              <dd>{s.base_stat}</dd>
              <div className="statBar" aria-hidden="true">
                <span
                  style={{ width: `${(s.base_stat / MAX_BASE_STAT) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </dl>
      </section>

      {gallery.length > 0 && (
        <section className="detailsGallery" aria-labelledby="sprites-title">
          <h2 id="sprites-title">Sprites</h2>
          <ul className="spriteList">
            {gallery.map((sprite) => (
              <li key={sprite.label}>
                <img
                  className="imgDetails"
                  src={sprite.src}
                  alt={`${sprite.label} sprite of ${pokemon.name}`}
                  width="96"
                  height="96"
                />
                <span>{sprite.label}</span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
