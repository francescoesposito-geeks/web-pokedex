export const PATHS = {
  HOME: "/",
  ABOUT: "/about",
  POKEMON_DETAILS: "/pokemon/:id",
  POKEMON_TEAM: "/pokemonTeam",
};

export const buildDinamicPath = {
  pokemonDetail: (id) => `/pokemon/${id}`,
};
