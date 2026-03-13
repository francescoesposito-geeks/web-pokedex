import "/src/styles/About.css";

export function AboutPk() {
  const techArray = [
    {
      name: "React",
      link: "https://it.react.dev/",
    },
    {
      name: "React Router",
      link: "https://reactrouter.com/home",
    },
    {
      name: "PokeAPI",
      link: "https://pokeapi.co/",
    },
    {
      name: "Vite",
      link: "https://vite.dev/",
    },
  ];

  return (
    <>
      <div className="title">
        <h1>About</h1>
      </div>
      <div className="containerAbout">
        <h2 className="subtitleAbout">what's this project?</h2>
        <p className="aboutParag">
          This project is a digital replica of the Pokedex. Any questions about
          a Pokémon can be answered by searching for it or typing its name in
          the list. Currently, there's little information for each Pokémon, but
          more details will be added in the future. The main features include
          viewing the entire first generation of Pokémon with their key
          information, and clicking on a card allows you to add that Pokémon to
          your team (max 6). You can also see the APIs used to create this
          pokedex and more information about what a pokedex is. If you are
          missing Pokemon, click on the Pokeball in the top left menu.
        </p>
        <h2 className="subtitleAbout">used technologies</h2>
      </div>
      <div className="listTech">
        <ul>
          {techArray.map((tek, index) => (
            <li key={index}>
              {tek.name}-
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
