import "/src/styles/Navbar.css";
import { NavLink, useLocation } from "react-router";

export function Navbar() {
  const location = useLocation();

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="navbar">
        <a href="https://www.youtube.com/watch?v=_9HHju9_hMM" target="_blank">
          <img src="/src/assets/Pokeball-PNG.png" alt="logo-pokemon"></img>
        </a>
        <ul className="menuHeader">
          <div className="navBarDiv">
            <li>
              <NavLink className="linkNavbar" to="/" onClick={handleHomeClick}>
                Home
              </NavLink>
            </li>
            <li>
              <a className="linkNavbar" href="https://pokeapi.co/">
                API
              </a>
            </li>
            <li>
              <a
                className="linkNavbar"
                href="https://wiki.pokemoncentral.it/Elenco_dei_Pok%C3%A9mon_secondo_il_Pok%C3%A9dex_Nazionale"
              >
                Pokedex
              </a>
            </li>
            <li>
              <NavLink className="linkNavbar" to="/pokemonTeam">
                Pokemon Team
              </NavLink>
            </li>
          </div>
          <div className="navBarDiv">
            <li>
              <NavLink className="linkNavbar" to="/about">
                About
              </NavLink>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
}
