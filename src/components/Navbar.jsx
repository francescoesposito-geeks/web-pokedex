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
              <a href="">API</a>
            </li>
            <li>
              <a href="">Pokedex</a>
            </li>
          </div>
          <div className="navBarDiv">
            <li>
              <a href="">About</a>
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
