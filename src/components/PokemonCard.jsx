import { useState } from "react";

export function PokemonCard({ pokemon, onAdd }) {
  const [detail, setDetail] = useState(null);
  const [isOpen, setOpen] = useState(false);

  async function handleCardClick() {
    if (detail === null) {
      try {
        const response = await fetch(pokemon.url);
        const data = await response.json();

        setDetail(data);
      } catch (error) {
        console.error(error.message);
      }
    }
    setOpen(!isOpen);
  }

  return (
    <div className="pokemonCard">
      <li key={pokemon.id}>
        <ul>
          <div onClick={handleCardClick}>
            <li>
              <b>nome: </b>
              {pokemon.name}
            </li>
          </div>
          {isOpen && (
            <>
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
                <button onClick={() => onAdd(pokemon)}>+</button>
              </li>
            </>
          )}
        </ul>
      </li>
    </div>
  );
}
