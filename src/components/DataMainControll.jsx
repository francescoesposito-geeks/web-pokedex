import { usePokedex } from "../hooks/usePokedex";
import { FormPokedex } from "./Formpokedex";
import { GridCards } from "./gridCards";
import { useMemo, useState } from "react";
import { SkeletonHome } from "./SkeletonHome";
import { ValueContext } from "/src/providers/ProvaContext";
import { toast } from "react-toastify";

export function DataMainControll() {
  const { pokemon, loading, error } = usePokedex();
  const [inputForm, setInputForm] = useState("");

  const saved = localStorage.getItem("teamPokemon");
  let initialTeam;

  let idSaved = Number(localStorage.getItem("id"));

  if (saved) {
    initialTeam = JSON.parse(saved);
  } else {
    initialTeam = [];
  }
  const [teamPokemon, setTeamPokemon] = useState(initialTeam);

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
    idSaved++;
    console.log("prima id", idSaved);
    if (teamPokemon.length < 6) {
      const newTeam = [...teamPokemon, { ...pk, idUnic: idSaved }];
      setTeamPokemon(newTeam);
      localStorage.setItem("teamPokemon", JSON.stringify(newTeam));
      localStorage.setItem("id", JSON.stringify(idSaved));
      toast.success("Pokémon added to the team!", { className: "toast" });
    } else {
      toast.error("failed, max 6 Pokemon in the Team", { className: "toast" });
    }

    console.log("dopo id", idSaved);
  }

  return (
    <>
      <FormPokedex
        onSubmit={searchPokemon}
        valueInput={inputForm}
        onReset={resetForm}
      />
      {loading ? (
        <SkeletonHome />
      ) : (
        <ValueContext value={{ addPokemonToTeam }}>
          <GridCards
            pokemonData={filterArrayPokemon}
            addPk={addPokemonToTeam}
          />
        </ValueContext>
      )}
    </>
  );
}
