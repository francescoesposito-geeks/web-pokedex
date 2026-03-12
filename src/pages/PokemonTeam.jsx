export function PokemonTeam() {
  const saved = localStorage.getItem("team");
  let initialTeam;

  if (saved) {
    initialTeam = JSON.parse(saved);
  } else {
    initialTeam = [];
  }

  const [teamPokemon, setTeamPokemon] = useState(initialTeam);

  return <div></div>;
}
