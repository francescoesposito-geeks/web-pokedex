import { usePokedex } from "../hooks/usePokedex";
import { FormPokedex } from "./Formpokedex";
import { GridCards } from "./GridCards";
import { useMemo, useState } from "react";
import { SkeletonHome } from "./SkeletonHome";

export function DataMainControll() {
  const { pokemon, loading, error } = usePokedex();
  const [inputForm, setInputForm] = useState("");

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
  }

  function resetForm() {
    setInputForm("");
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
        <GridCards pokemonData={filterArrayPokemon} />
      )}
    </>
  );
}
