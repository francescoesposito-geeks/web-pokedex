import { DataMainControll } from "../components/DataMainControll";

export function Home() {
  return (
    <>
      <header className="pageHeader">
        <h1>Pokédex</h1>
        <p className="pageIntro">
          The first 151 Pokémon. Open a card to see types, height and weight,
          then add your favourites to a team of up to six.
        </p>
      </header>
      <DataMainControll />
    </>
  );
}
