import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const TeamContext = createContext(null);

export function TeamProvider({ children }) {
  const saved = localStorage.getItem("teamPokemon");
  let initialTeam;
  if (saved) {
    initialTeam = JSON.parse(saved);
  } else {
    initialTeam = [];
  }

  const [teamPokemon, setTeamPokemon] = useState(initialTeam);

  function addPokemonToTeam(pk) {
    if (teamPokemon.length < 6) {
      let nextId = 1;
      if (teamPokemon.length > 0) {
        nextId = Math.max(...teamPokemon.map((pk) => pk.idUnic)) + 1;
      }
      const newTeam = [...teamPokemon, { ...pk, idUnic: nextId }];
      setTeamPokemon(newTeam);
      localStorage.setItem("teamPokemon", JSON.stringify(newTeam));
      toast.success("Pokémon added to the team!");
    } else {
      toast.error("failed, max 6 Pokemon in the Team");
    }
  }

  function removePokemonToTheTeam(idUnic) {
    const newTeam = teamPokemon.filter((pk) => pk.idUnic !== idUnic);
    setTeamPokemon(newTeam);
    localStorage.setItem("teamPokemon", JSON.stringify(newTeam));
  }

  return (
    <TeamContext.Provider
      value={{ teamPokemon, addPokemonToTeam, removePokemonToTheTeam }}
    >
      {children}
    </TeamContext.Provider>
  );
}
