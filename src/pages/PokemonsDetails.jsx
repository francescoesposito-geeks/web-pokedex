import { useContext } from "react";
import { Link, useParams } from "react-router";
import { PATHS } from "../routes/paths.jsx";
import { TeamContext } from "../context/TeamContext";
import { usePokemonDetails } from "../hooks/usePokemonDetails";
import { PokemonCardDetails } from "../components/PokemonCardDetails";

export function PokemonsDetails() {
  const { id } = useParams();
  const { pokemon, loading, error } = usePokemonDetails(id);
  const { addPokemonToTeam } = useContext(TeamContext);

  return (
    <>
      <Link className="backButton" to={PATHS.HOME}>
        Back to the Pokédex
      </Link>

      {loading ? (
        <div className="spinner" role="status" aria-label="Loading" />
      ) : error ? (
        <p className="errorFetch" role="alert">
          {error.message}
        </p>
      ) : (
        <PokemonCardDetails
          pokemon={pokemon}
          onAdd={() => addPokemonToTeam(pokemon)}
        />
      )}
    </>
  );
}
