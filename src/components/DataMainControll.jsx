import { usePokedex } from "../hooks/usePokedex";
import { FormPokedex } from "./Formpokedex";
import { GridCards } from "./gridCards";
import { useMemo, useState } from "react";
import { TeamPokemon } from "./TeamPokemon";

export function DataMainControll() {
  const { pokemon, loading, error } = usePokedex();
  const [inputForm, setInputForm] = useState("");
  const [teamPokemon, setTeamPokemon] = useState([]);

  const filteresArrayPokemon = useMemo(() => {
    let result = pokemon;

    if (inputForm !== "") {
      result = pokemon.filter((pk) => {
        return pk.name === inputForm;
      });
    }

    return result;
  }, [pokemon, inputForm]);

  function searchPokemon(input) {
    setInputForm(input);

    return;
  }

  function resetForm() {
    setInputForm("");
  }

  function addPokemonToTeam() {}

  return (
    <>
      <FormPokedex
        onSubmit={searchPokemon}
        valueInput={inputForm}
        onReset={resetForm}
      />
      <GridCards pokemonData={filteresArrayPokemon} />
      <TeamPokemon pokemonArray={teamPokemon} />
    </>
  );
}
