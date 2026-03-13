import { useContext } from "react";
import { TeamPkCard } from "../components/TeamPkCard";
import { TeamContext } from "../context/TeamContext";

export function PokemonTeam() {
  const { teamPokemon, removePokemonToTheTeam } = useContext(TeamContext);

  return (
    <>
      <div className="title">
        <h1>TEAM POKEMON</h1>
      </div>
      <ul className="gridCardsTeamPokemon">
        {teamPokemon.map((pk) => (
          <TeamPkCard
            key={pk.idUnic}
            pokemon={pk}
            onRemove={removePokemonToTheTeam}
          />
        ))}
      </ul>
    </>
  );
}
