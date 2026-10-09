import "../styles/footer.css";

export function Footer() {
  return (
    <footer className="footerDiv">
      <p>
        Data and sprites from{" "}
        <a href="https://pokeapi.co/" target="_blank" rel="noreferrer">
          PokeAPI
        </a>
        .
      </p>
      <p>
        Non-commercial fan project. Pokémon and Pokémon character names are
        trademarks of Nintendo, Creatures Inc. and GAME FREAK inc.
      </p>
    </footer>
  );
}
