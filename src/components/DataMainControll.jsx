import { usePokedex } from "../hooks/usePokedex";
import { FormPokedex } from "./Formpokedex";
import { GridCards } from "./gridCards";

export function DataMainControll() {
  const { pokemon, loading, error } = usePokedex();
  console.log(pokemon);
  console.log(loading);
  console.log(error);

  function searchPokemon() {
    return;
  }

  return (
    <>
      <FormPokedex onSubmit={searchPokemon} />
      <GridCards pokemonData={pokemon} />
    </>
  );
}
