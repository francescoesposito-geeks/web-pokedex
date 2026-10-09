import { useMemo, useState } from "react";
import { usePokedex } from "../hooks/usePokedex";
import { useDebounce } from "../hooks/useDebounce.jsx";
import { getIdFromUrl } from "../utils/pokemon";
import { FormPokedex } from "./FormPokedex";
import { GridCards } from "./GridCards";
import { SkeletonHome } from "./SkeletonHome";

export function DataMainControll() {
  const { pokemon, loading, error } = usePokedex();
  const [inputForm, setInputForm] = useState("");
  const debouncedInput = useDebounce(inputForm, 300);

  const filterArrayPokemon = useMemo(() => {
    const cleanedInput = debouncedInput.trim().toLowerCase().replace("#", "");

    if (cleanedInput === "") return pokemon;

    // a number searches the Pokédex number, text searches the name
    if (/^\d+$/.test(cleanedInput)) {
      return pokemon.filter(
        (pk) => getIdFromUrl(pk.url) === Number(cleanedInput),
      );
    }
    return pokemon.filter((pk) => pk.name.startsWith(cleanedInput));
  }, [pokemon, debouncedInput]);

  function renderResults() {
    if (loading) {
      return <SkeletonHome />;
    }
    if (error) {
      return (
        <p className="errorFetch" role="alert">
          The Pokédex could not be loaded. Check your connection and reload the
          page.
        </p>
      );
    }
    if (filterArrayPokemon.length === 0) {
      return (
        <p className="emptyResult">
          No Pokémon matches “{debouncedInput}”. This Pokédex covers the first
          151 Pokémon.
        </p>
      );
    }
    return <GridCards pokemonData={filterArrayPokemon} />;
  }

  return (
    <>
      <FormPokedex
        onSubmit={setInputForm}
        valueInput={inputForm}
        onReset={() => setInputForm("")}
      />
      {!loading && !error && (
        <p className="resultCount" aria-live="polite">
          {filterArrayPokemon.length} of {pokemon.length} Pokémon
        </p>
      )}
      {renderResults()}
    </>
  );
}
