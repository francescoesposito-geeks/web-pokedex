import "../styles/Navbar.css";
import { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { PATHS } from "../routes/paths.jsx";
import { MAX_TEAM_SIZE, TeamContext } from "../context/TeamContext";
import { useIsLoading } from "../hooks/useIsLoading";

export function Navbar() {
  const location = useLocation();
  const { teamPokemon } = useContext(TeamContext);
  const isLoading = useIsLoading();

  const handleHomeClick = () => {
    if (location.pathname === PATHS.HOME) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link className="brand" to={PATHS.HOME} onClick={handleHomeClick}>
          {/* the lens and the three lights of the Pokédex: the lens blinks while data is loading */}
          <span
            className={isLoading ? "dexLights isLoading" : "dexLights"}
            aria-hidden="true"
          >
            <span className="brand-lens" />
            <span className="dexLeds">
              <span className="led led-red" />
              <span className="led led-yellow" />
              <span className="led led-green" />
            </span>
          </span>
          Web Pokédex
        </Link>
        <nav aria-label="Main">
          <ul className="menuHeader">
            <li>
              <NavLink
                className="linkNavbar"
                to={PATHS.HOME}
                end
                onClick={handleHomeClick}
              >
                Pokédex
              </NavLink>
            </li>
            <li>
              <NavLink className="linkNavbar" to={PATHS.POKEMON_TEAM}>
                My team{" "}
                <span className="team-count">
                  {teamPokemon.length}/{MAX_TEAM_SIZE}
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink className="linkNavbar" to={PATHS.ABOUT}>
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
