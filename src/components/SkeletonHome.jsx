export function SkeletonHome({ boxs = 18 }) {
  return (
    <ul className="gridCardsPokemon" aria-busy="true" aria-label="Loading">
      {Array.from({ length: boxs }, (_, index) => (
        <li key={index}>
          <div className="pokemonCard skeletonCard">
            <div className="skeleton skeleton-number" />
            <div className="skeleton skeleton-sprite" />
            <div className="skeleton skeleton-name" />
            <div className="skeleton skeleton-button" />
          </div>
        </li>
      ))}
    </ul>
  );
}
