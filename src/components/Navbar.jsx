import "/src/styles/Navbar.css";

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
              <a href="">Home </a>
            </li>
            <li>
              <a href="https://pokeapi.co/">API</a>
            </li>
            <li>
              <a href="https://wiki.pokemoncentral.it/Elenco_dei_Pok%C3%A9mon_secondo_il_Pok%C3%A9dex_Nazionale">
                Pokedex
              </a>
            </li>
          </div>
          <div className="navBarDiv">
            <li>
              <a href="https://en.wikipedia.org/wiki/Pok%C3%A9mon">About</a>
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
