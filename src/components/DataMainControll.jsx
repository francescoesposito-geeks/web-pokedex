import { usePokedex } from "../hooks/usePokedex";
import { FormPokedex } from "./Formpokedex";
import { GridCards } from "./GridCards";
import { useMemo, useState, useEffect } from "react";
import { SkeletonHome } from "./SkeletonHome";
import { useDebounce } from "/src/hooks/useDebounce.jsx";

export function DataMainControll() {
  const { pokemon, loading, error } = usePokedex();
  const [inputForm, setInputForm] = useState("");
  const debouncedInput = useDebounce(inputForm, 500);

  const filterArrayPokemon = useMemo(() => {
    let result = pokemon;

    if (debouncedInput !== "") {
      result = pokemon.filter((pk) => {
        return pk.name === debouncedInput;
      });
    }

    return result;
  }, [pokemon, debouncedInput]);

  function resetForm() {
    setInputForm("");
  }

  return (
    <>
      <FormPokedex
        onSubmit={setInputForm}
        valueInput={inputForm}
        onReset={resetForm}
      />
      {loading ? (
        <SkeletonHome />
      ) : error ? (
        <div className="errorFetch">
          <p>something go wrong</p>
          <p>{error.message}</p>
        </div>
      ) : (
        <GridCards pokemonData={filterArrayPokemon} />
      )}
    </>
  );
}
