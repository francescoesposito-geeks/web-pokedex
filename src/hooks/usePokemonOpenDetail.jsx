import { useState } from "react";
import { toast } from "react-toastify";

export function usePokemonOpenDetails(pokemon) {
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchDetail() {
    if (detail !== null) return;
    try {
      const response = await fetch(pokemon.url);
      if (!response.ok) {
        throw new Error("errore: " + response.status);
      }
      const data = await response.json();

      setDetail(data);
    } catch (error) {
      setError(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  return { detail, loading, error, fetchDetail };
}
