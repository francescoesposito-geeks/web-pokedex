import "/src/styles/Navbar.css";

export function Navbar() {
  return (
    <header>
      <nav>
        <ul className="leftUl">
          <li>
            <a href="">
              <img src="/src/assets/Pokeball-PNG.png" alt="logo-pokemon"></img>
            </a>
          </li>
          <li>
            <a href="">HOME </a>
          </li>
          <li>
            <a href="">pokedex</a>
          </li>
          <li>
            <a href="">history</a>
          </li>
        </ul>

        <ul className="rightUl">
          <li>
            <a href="">about</a>
          </li>
          <li>
            <a href="">don't click me</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
