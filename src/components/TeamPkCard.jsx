import { useState } from "react";

export function TeamPkCard({ pokemon }) {
  const [detail, setDetail] = useState(null);
  console.log("sei qua ", pokemon);

  async function handleCardClick() {
    if (detail === null) {
      try {
        const response = await fetch(pokemon.url);
        const data = await response.json();
        console.log("qua i data ", data);
        setDetail(data);
      } catch (error) {
        console.error(error.message);
      }
    }
  }
  return (
    <div className="pokemonCard" onClick={handleCardClick}>
      <li key={pokemon.id}>
        <ul>
          <li>
            <b>nome: </b>
            {pokemon.name}
          </li>
          <li>
            <b>height: </b> {detail.height}
          </li>
          <li>
            <b>weight: </b> {detail.weight}
          </li>
          <li>
            <b>type: </b>
            {detail.types[0].type.name}
          </li>
          <li>
            <img src={detail.sprites.front_default} alt="image-pokemon" />
          </li>
          <li>
            <button onClick={() => onRemove(pokemon)}>-</button>
          </li>
        </ul>
      </li>
    </div>
  );
}
