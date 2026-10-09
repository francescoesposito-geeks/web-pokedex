// types can be ["grass"] (team) or [{ type: { name: "grass" } }] (PokeAPI)
export function TypeBadges({ types }) {
  return (
    <ul className="typeBadges" aria-label="Types">
      {types.map((t) => {
        const name = typeof t === "string" ? t : t.type.name;
        return (
          <li key={name} className="typeBadge">
            <span className={`typeDot type-${name}`} aria-hidden="true" />
            {name}
          </li>
        );
      })}
    </ul>
  );
}
