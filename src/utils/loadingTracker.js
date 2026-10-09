// counts the requests to PokeAPI that are still running,
// so any component can know if the app is loading something

let pendingRequests = 0;
const listeners = new Set();

function notify() {
  listeners.forEach((listener) => listener());
}

export function subscribeToLoading(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function isLoadingSomething() {
  return pendingRequests > 0;
}

// same as fetch, but it is counted while it runs
export async function trackedFetch(url, options) {
  pendingRequests++;
  notify();
  try {
    return await fetch(url, options);
  } finally {
    pendingRequests--;
    notify();
  }
}
