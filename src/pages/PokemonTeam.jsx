import { useContext } from "react";
import { Link } from "react-router";
import { PATHS } from "../routes/paths.jsx";
import { MAX_TEAM_SIZE, TeamContext } from "../context/TeamContext";
import { TeamPkCard } from "../components/TeamPkCard";

export function PokemonTeam() {
  const { teamPokemon, removePokemonToTheTeam } = useContext(TeamContext);
  const emptySlots = MAX_TEAM_SIZE - teamPokemon.length;

  return (
    <>
      <header className="pageHeader">
        <h1>My team</h1>
        <p className="pageIntro">
          {teamPokemon.length} of {MAX_TEAM_SIZE} slots used. Your team is saved
          in this browser.
        </p>
      </header>

      <ul className="gridCardsTeamPokemon">
        {teamPokemon.map((pk) => (
          <li key={pk.idUnic}>
            <TeamPkCard pokemon={pk} onRemove={removePokemonToTheTeam} />
          </li>
        ))}
        {Array.from({ length: emptySlots }, (_, index) => (
          <li key={`empty-${index}`}>
            <div className="emptySlot">
              <span>Empty slot</span>
              {index === 0 && (
                <Link to={PATHS.HOME}>Add a Pokémon from the Pokédex</Link>
              )}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
