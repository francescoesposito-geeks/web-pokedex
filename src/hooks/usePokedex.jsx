import { useEffect, useState } from "react";

export function usePokedex() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("useEffect partito");
    async function fetchData() {
      let url = "https://pokeapi.co/api/v2/pokemon/";

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("errore: ", response.status);
        }

        const data = await response.json();
        console.log("data ", data);
        setPokemon(data.results);
      } catch (error) {
        setError(error);
        console.error(error.message);
      }
      setLoading(false);
    }

    fetchData();
  }, []);
  return { pokemon, loading, error };
}
