export function SkeletonHome() {
  return (
    <ul className="gridCardsPokemon">
      {Array(60)
        .fill(undefined)
        .map((value, index) => (
          <li key={index} className="pokemonCard">
            <div className="nomePokemonCard">
              <div className="skeleton skeleton-name" />
              <div className="skeleton skeleton-button" />
            </div>
          </li>
        ))}
    </ul>
  );
}
