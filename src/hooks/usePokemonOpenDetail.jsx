import { useState } from "react";

export function usePokemonOpenDetails(pokemon) {
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchDetail() {
    if (detail !== null) return;
    try {
      console.log("sono qua");
      const response = await fetch(pokemon.url);
      const data = await response.json();

      setDetail(data);
    } catch (error) {
      setError(error);
      console.error(error.message);
    }
    setLoading(false);
  }

  return { detail, loading, error, fetchDetail };
}
