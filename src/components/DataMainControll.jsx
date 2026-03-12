import { usePokedex } from "../hooks/usePokedex";
import { FormPokedex } from "./Formpokedex";
import { GridCards } from "./gridCards";
import { useMemo, useRef, useState } from "react";
import { TeamPokemon } from "./TeamPokemon";

export function DataMainControll() {
  const { pokemon, loading, error } = usePokedex();
  const [inputForm, setInputForm] = useState("");
  const [teamPokemon, setTeamPokemon] = useState([]);
  let nextId = useRef(0);

  const filterArrayPokemon = useMemo(() => {
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
    if (teamPokemon.length === 0) {
      nextId.current = 1;
    } else {
      nextId.current++;
    }

    if (teamPokemon.length < 6) {
      setTeamPokemon((prev) => [...prev, { ...pk, idUnic: nextId.current }]);
      console.log("nextid", nextId);
      localStorage.setItem("team", JSON.stringify(pk));
    } else {
      alert("max 6 Pokemon in the Team");
    }
  }
  function removePokemonToTheTeam(pk) {
    setTeamPokemon((prev) =>
      prev.filter((pokemon) => pokemon.idUnic !== pk.idUnic),
    );
  }

  return (
    <>
      <FormPokedex
        onSubmit={searchPokemon}
        valueInput={inputForm}
        onReset={resetForm}
      />
      <GridCards pokemonData={filterArrayPokemon} addPk={addPokemonToTeam} />
      <TeamPokemon
        pokemonArray={teamPokemon}
        removePk={removePokemonToTheTeam}
      />
    </>
  );
}
