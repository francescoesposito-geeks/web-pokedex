import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export function usePokemonDetails(id) {
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      let url = "https://pokeapi.co/api/v2/pokemon/" + id;

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("errore: ", response.status);
        }

        const data = await response.json();

        setPokemon(data);
      } catch (error) {
        setError(error);
        console.error(error.message);
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);
  return { pokemon, loading, error };
}
