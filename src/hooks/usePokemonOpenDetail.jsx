import { useState } from "react";
import { trackedFetch } from "../utils/loadingTracker";

// loads the details of a card only the first time it is opened
export function usePokemonOpenDetails(pokemon) {
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchDetail() {
    if (detail !== null || loading) return;
    setLoading(true);
    setError(null);
    try {
      const response = await trackedFetch(pokemon.url);
      if (!response.ok) {
        throw new Error(`PokeAPI answered with error ${response.status}.`);
      }
      setDetail(await response.json());
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  return { detail, loading, error, fetchDetail };
}
