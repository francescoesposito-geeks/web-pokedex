import "../styles/About.css";

const TECH_ARRAY = [
  {
    id: 1,
    name: "React",
    description: "components, hooks and Context for the team",
    link: "https://react.dev/",
  },
  {
    id: 2,
    name: "React Router",
    description: "pages and the dynamic route /pokemon/:id",
    link: "https://reactrouter.com/",
  },
  {
    id: 3,
    name: "PokeAPI",
    description: "free REST API with Pokémon data and sprites",
    link: "https://pokeapi.co/",
  },
  {
    id: 4,
    name: "React Toastify",
    description: "notifications when the team changes",
    link: "https://fkhadra.github.io/react-toastify/",
  },
  {
    id: 5,
    name: "Vite",
    description: "development server and build",
    link: "https://vite.dev/",
  },
];

export function AboutPk() {
  return (
    <div className="containerAbout">
      <header className="pageHeader">
        <h1>About this project</h1>
      </header>
      <p className="aboutParag">
        A web Pokédex for the first 151 Pokémon, built with React as a practice
        project during my web development internship. You can search Pokémon by
        name or number, open a card to see the main data, read the full profile
        with base stats and sprites, and build a team of up to six Pokémon that
        stays saved in the browser.
      </p>
      <h2 className="subtitleAbout">Technologies</h2>
      <ul className="ulListTek">
        {TECH_ARRAY.map((tech) => (
          <li key={tech.id} className="liAbout">
            <a
              className="linkTechnologies"
              href={tech.link}
              target="_blank"
              rel="noreferrer"
            >
              {tech.name}
            </a>
            <span>{tech.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
