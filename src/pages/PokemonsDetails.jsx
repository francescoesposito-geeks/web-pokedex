import { useParams } from "react-router";
import { usePokemonDetails } from "../hooks/usePokemonDetails";
import { PokemonCardDetails } from "../components/PokemonCardDetails";

export function PokemonsDetails() {
  const params = useParams();
  const { pokemon, loading } = usePokemonDetails(params.id);

  console.log("dati pokemon fetchati", pokemon);

  return <div>{!loading && <PokemonCardDetails pokemon={pokemon} />}</div>;
}
