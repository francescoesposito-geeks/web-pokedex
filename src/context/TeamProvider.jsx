import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { MAX_TEAM_SIZE, TeamContext } from "./TeamContext";
import { capitalize, toTeamMember } from "../utils/pokemon";

const STORAGE_KEY = "teamPokemon";

function loadTeam() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!Array.isArray(saved)) {
      return [];
    }
    return saved
      .slice(0, MAX_TEAM_SIZE)
      .map((pk) => ({ ...toTeamMember(pk), idUnic: pk.idUnic }));
  } catch {
    // corrupted data: start with an empty team instead of crashing
    return [];
  }
}

export function TeamProvider({ children }) {
  const [teamPokemon, setTeamPokemon] = useState(loadTeam);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(teamPokemon));
    } catch {
      toast.error("The team could not be saved in this browser.");
    }
  }, [teamPokemon]);

  function addPokemonToTeam(pokemon) {
    if (teamPokemon.length >= MAX_TEAM_SIZE) {
      toast.error("Your team is full: remove a Pokémon first.");
      return;
    }
    const nextId =
      teamPokemon.length > 0
        ? Math.max(...teamPokemon.map((pk) => pk.idUnic)) + 1
        : 1;
    setTeamPokemon([
      ...teamPokemon,
      { ...toTeamMember(pokemon), idUnic: nextId },
    ]);
    toast.success(`${capitalize(pokemon.name)} added to your team.`);
  }

  function removePokemonToTheTeam(idUnic) {
    setTeamPokemon(teamPokemon.filter((pk) => pk.idUnic !== idUnic));
  }

  return (
    <TeamContext.Provider
      value={{ teamPokemon, addPokemonToTeam, removePokemonToTheTeam }}
    >
      {children}
    </TeamContext.Provider>
  );
}
