import { useEffect, useState } from "react";
import { trackedFetch } from "../utils/loadingTracker";

export function usePokemonDetails(id) {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // ignores the answer if the user has already moved to another Pokémon
    let ignore = false;

    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const response = await trackedFetch(
          "https://pokeapi.co/api/v2/pokemon/" + id,
        );
        if (response.status === 404) {
          throw new Error(`No Pokémon found with number ${id}.`);
        }
        if (!response.ok) {
          throw new Error(`PokeAPI answered with error ${response.status}.`);
        }
        const data = await response.json();
        if (!ignore) {
          setPokemon(data);
        }
      } catch (error) {
        if (!ignore) {
          setError(error);
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    fetchData();
    return () => {
      ignore = true;
    };
  }, [id]);

  return { pokemon, loading, error };
}
