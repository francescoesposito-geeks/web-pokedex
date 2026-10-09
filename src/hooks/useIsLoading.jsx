import { useSyncExternalStore } from "react";
import {
  isLoadingSomething,
  subscribeToLoading,
} from "../utils/loadingTracker";

// true while at least one request to PokeAPI is running
export function useIsLoading() {
  return useSyncExternalStore(subscribeToLoading, isLoadingSomething);
}
