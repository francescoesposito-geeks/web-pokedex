import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { trackedFetch } from "../utils/loadingTracker";

const POKEDEX_URL = "https://pokeapi.co/api/v2/pokemon?limit=151";

export function usePokedex() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await trackedFetch(POKEDEX_URL);
        if (!response.ok) {
          throw new Error(`PokeAPI answered with error ${response.status}`);
        }
        const data = await response.json();
        setPokemon(data.results);
      } catch (error) {
        setError(error);
        toast.error("The Pokédex could not be loaded.");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { pokemon, loading, error };
}
