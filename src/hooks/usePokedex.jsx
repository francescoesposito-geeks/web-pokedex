import { useEffect, useState } from "react";

export function usePokedex() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      let url = "https://pokeapi.co/api/v2/pokemon/?limit=151";

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("errore: ", response.status);
        }

        const data = await response.json();

        setPokemon(data.results);
      } catch (error) {
        setError(error);
        console.error(error.message);
      }
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }

    fetchData();
  }, []);
  return { pokemon, loading, error };
}
