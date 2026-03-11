import { useState } from "react";
import { Link } from "react-router";

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
    <li className="pokemonCard">
      <ul>
        <div className="nomePokemonCard" onClick={handleCardClick}>
          <li>
            <b>name: </b>
            {pokemon.name}
          </li>
          <button>
            <img
              className="expand"
              src="/src/assets/icons8-expand-arrow-96.png"
              alt="expand"
            />
          </button>
        </div>
        {isOpen && (
          <div className="cardIsOpen">
            <li>
              <b>height: </b> {detail.height * 10 + "cm"}
            </li>
            <li>
              <b>weight: </b> {detail.weight / 10 + "kg"}
            </li>
            <li>
              <b>type: </b>
              {detail.types[0].type.name}
            </li>
            <li>
              <img src={detail.sprites.front_default} alt="image-pokemon" />
            </li>
            <li className="bottomPokemonCardButtons">
              <button onClick={() => onAdd(detail)}>+</button>
              {/* passo nell'url l'id del pokemon */}
              <Link className="backButton" to={`/pokemon/${detail.id}`}>
                info
              </Link>
            </li>
          </div>
        )}
      </ul>
    </li>
  );
}
