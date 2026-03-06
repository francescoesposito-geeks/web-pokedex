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

  function addPokemonToTeam(pk) {
    console.log("ce l'hai fatta tigre");
    setTeamPokemon((prev) => {
      return [...prev, pk];
    });
  }

  return (
    <>
      <FormPokedex
        onSubmit={searchPokemon}
        valueInput={inputForm}
        onReset={resetForm}
      />
      <GridCards pokemonData={filteresArrayPokemon} add={addPokemonToTeam} />
      <TeamPokemon pokemonArray={teamPokemon} />
    </>
  );
}
