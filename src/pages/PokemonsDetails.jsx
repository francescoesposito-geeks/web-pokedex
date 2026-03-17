import { useParams, Link } from "react-router";
import { usePokemonDetails } from "../hooks/usePokemonDetails";
import { PokemonCardDetails } from "../components/PokemonCardDetails";

export function PokemonsDetails() {
  const params = useParams();
  const { pokemon, loading } = usePokemonDetails(params.id);

  return (
    <>
      <div className="title">
        <h1>Pokemon Info</h1>
      </div>
      <div>
        <Link className="backButton" to="/">
          BACK
        </Link>

        {loading ? (
          <div className="spinner" />
        ) : (
          <PokemonCardDetails pokemon={pokemon} />
        )}
      </div>
    </>
  );
}
