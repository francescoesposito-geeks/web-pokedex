import "/src/styles/footer.css";

const FOOTER_TEXT_COLUMNS = [
  {
    title: "INFO",
    items: ["Lorem", "ipsum", "dolor", "sit", "amet", "mudu"],
  },
  {
    title: "PRODOTTI",
    items: ["Lorem", "ipsum", "dolor", "sit", "amet", "adipisicing"],
  },
  {
    title: "LAVORI",
    items: ["Lorem", "ipsum", "dolor", "sit", "amet", "pikachu"],
  },
  {
    title: "LOREM",
    items: ["Lorem", "ipsum", "dolor", "sit", "amet", "ash"],
  },
  {
    title: "SUPPORTO",
    items: ["Lorem", "ipsum", "dolor", "sit", "amet", "gottachemall"],
  },
];

const FOOTER_RIGHTS_RESERVED =
  "© www.cirowebsite.com - Grafica, layout, articoli e guide sono di esclusiva proprietà del ciromaster - Tutti i diritti riservati";

export function Footer() {
  return (
    <div className="footerDiv">
      <div className="firstRawFooter">
        <img
          className="footerImg1"
          src="/src/assets/pokemon-logo-final.png"
          alt="pokemon-star"
        />
        <img
          className="footerImg2"
          src="/src/assets/logo-pokemon17.webp"
          alt="pokemon-logo"
        />
      </div>
      <div className="secondRawFooter">
        {FOOTER_TEXT_COLUMNS.map((obj) => (
          <div key={obj.title} className="listFooter">
            <ul>
              <h3>{obj.title}</h3>
              {obj.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="thirdRawFooter">
        <p>{FOOTER_RIGHTS_RESERVED}</p>
      </div>
    </div>
  );
}
