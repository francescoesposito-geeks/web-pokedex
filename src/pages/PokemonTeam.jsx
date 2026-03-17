import { useContext } from "react";
import { TeamPkCard } from "../components/TeamPkCard";
import { TeamContext } from "../context/TeamContext";

const POKEMON_TEAM_FALLBACK = "No Pokémon in your team!";

export function PokemonTeam() {
  const { teamPokemon, removePokemonToTheTeam } = useContext(TeamContext);

  return (
    <>
      <div className="title">
        <h1>TEAM POKEMON</h1>
      </div>
      {teamPokemon.length === 0 ? (
        <p className="pkTeamFallBack">{POKEMON_TEAM_FALLBACK}</p>
      ) : (
        <ul className="gridCardsTeamPokemon">
          {teamPokemon.map((pk) => (
            <TeamPkCard
              key={pk.idUnic}
              pokemon={pk}
              onRemove={removePokemonToTheTeam}
            />
          ))}
        </ul>
      )}
    </>
  );
}
