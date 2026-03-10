import "/src/styles/Navbar.css";
import { Link, NavLink } from "react-router";

export function Navbar() {
  return (
    <>
      <nav className="navbar">
        <a href="https://www.youtube.com/watch?v=_9HHju9_hMM" target="_blank">
          <img src="/src/assets/Pokeball-PNG.png" alt="logo-pokemon"></img>
        </a>
        <ul className="menuHeader">
          <div className="navBarDiv">
            <li>
              <Link to="/">Home </Link>
            </li>
            <li>
              <a href="https://pokeapi.co/" target="_blank">
                API
              </a>
            </li>
            <li>
              <a
                href="https://wiki.pokemoncentral.it/Elenco_dei_Pok%C3%A9mon_secondo_il_Pok%C3%A9dex_Nazionale"
                target="_blank"
              >
                Pokedex
              </a>
            </li>
          </div>
          <div className="navBarDiv">
            <li>
              <NavLink to="/about"> About</NavLink>
            </li>
          </div>
        </ul>
      </nav>

      <div className="title">
        <h1>Pokedex Info</h1>
      </div>
    </>
  );
}
