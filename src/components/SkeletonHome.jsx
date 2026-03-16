export function SkeletonHome({ boxs = 21 }) {
  return (
    <ul className="gridCardsPokemon">
      {Array(boxs)
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
