import { useState } from "react";
import { TeamPkCard } from "../components/TeamPkCard";

export function PokemonTeam() {
  const saved = localStorage.getItem("teamPokemon");
  let initialTeam;

  if (saved) {
    initialTeam = JSON.parse(saved);
  } else {
    initialTeam = [];
  }

  const [teamPokemon, setTeamPokemon] = useState(initialTeam);

  function removePokemonToTheTeam(pk) {
    const newTeam = teamPokemon.filter((p) => p.idUnic !== pk.idUnic);
    setTeamPokemon(newTeam);
    localStorage.setItem("teamPokemon", JSON.stringify(newTeam));
  }

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
