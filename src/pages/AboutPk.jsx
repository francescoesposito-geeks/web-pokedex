import "/src/styles/About.css";

const TECH_ARRAY = [
  {
    id: 1,
    name: "React",
    link: "https://it.react.dev/",
  },
  {
    id: 2,
    name: "Vite",
    link: "https://vite.dev/",
  },
  {
    id: 3,
    name: "PokeAPI",
    link: "https://pokeapi.co/",
  },
  {
    id: 4,
    name: "React Router",
    link: "https://reactrouter.com/home",
  },
];

const PROJECT_TEXT =
  "This project is a digital replica of the Pokedex. Any questions about a Pokémon can be answered by searching for it or typing its name in the list. Currently, there is little information for each Pokémon, but more details will be added in the future. The main features include viewing the entire first generation of Pokémon with their key information, and clicking on a card allows you to add that Pokémon to your team (max 6). You can also see the APIs used to create this pokedex and more information about what a pokedex is. If you are missing Pokemon, click on the Pokeball in the top left menu.";

export function AboutPk() {
  return (
    <>
      <div className="title">
        <h1>About</h1>
      </div>
      <div className="containerAbout">
        <h2 className="subtitleAbout">what's this project?</h2>
        <p className="aboutParag">{PROJECT_TEXT}</p>
        <h2 className="subtitleAbout">used technologies</h2>
      </div>
      <div className="listTech">
        <ul className="ulListTek">
          {TECH_ARRAY.map((tek) => (
            <li key={tek.id} className="liAbout">
              {tek.name}
              <a className="linkTechnologies" href={tek.link}>
                {tek.link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
