import { useContext, useState } from "react";
import { Link } from "react-router";
import { ValueContext } from "/src/providers/ProvaContext";
import { usePokemonOpenDetails } from "../hooks/usePokemonOpenDetail";

export function PokemonCard({ pokemon }) {
  const [isOpen, setOpen] = useState(false);
  const { addPokemonToTeam } = useContext(ValueContext);
  const { detail, loading, error, fetchDetail } =
    usePokemonOpenDetails(pokemon);

  function handleClick() {
    fetchDetail(pokemon);
    setOpen(!isOpen);
  }

  return (
    <li className="pokemonCard">
      <ul>
        <div className="nomePokemonCard" onClick={handleClick}>
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
        {isOpen && !loading && (
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
              <button onClick={() => addPokemonToTeam(detail)}>+</button>
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
