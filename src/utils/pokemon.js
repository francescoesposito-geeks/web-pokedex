const SPRITES_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

// "https://pokeapi.co/api/v2/pokemon/25/" -> 25
export function getIdFromUrl(url) {
  const parts = url.split("/").filter(Boolean);
  return Number(parts[parts.length - 1]);
}

export function getSpriteUrl(id) {
  return `${SPRITES_URL}/${id}.png`;
}

// 25 -> "#025"
export function formatPokedexNumber(id) {
  return "#" + String(id).padStart(3, "0");
}

export function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

// "special-attack" -> "Special attack", "hp" -> "HP"
export function formatApiName(name) {
  if (name === "hp") return "HP";
  return capitalize(name.replaceAll("-", " "));
}

// PokeAPI gives height in decimetres and weight in hectograms
export function formatHeight(height) {
  return `${(height / 10).toFixed(1)} m`;
}

export function formatWeight(weight) {
  return `${(weight / 10).toFixed(1)} kg`;
}

// keeps only the data the team page needs, so localStorage stays small;
// it also accepts the full PokeAPI object saved by older versions of the app
export function toTeamMember(pokemon) {
  return {
    id: pokemon.id,
    name: pokemon.name,
    height: pokemon.height,
    weight: pokemon.weight,
    types: pokemon.types.map((t) => (typeof t === "string" ? t : t.type.name)),
    sprite:
      pokemon.sprite ??
      pokemon.sprites?.front_default ??
      getSpriteUrl(pokemon.id),
  };
}
