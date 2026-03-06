import { useState } from "react";

export function PokemonCard({ pokemon }) {
  const [detail, setDetail] = useState(null);
  const [isOpen, setOpen] = useState(false);

  async function handleCardClick() {
    console.log("sono qua", pokemon.url);
    if (detail === null) {
      try {
        const response = await fetch(pokemon.url);
        const data = await response.json();
        console.log(data);
        setDetail(data);
      } catch (error) {}
    }
    setOpen(!isOpen);
  }

  return (
    <div className="pokemonCard" onClick={handleCardClick}>
      <li>
        <ul>
          <li>
            <b>nome: </b>
            {pokemon.name}
          </li>
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
            </>
          )}
        </ul>
      </li>
    </div>
  );
}
