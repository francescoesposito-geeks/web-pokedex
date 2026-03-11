import { DataMainControll } from "../components/DataMainControll";

export function Home() {
  return (
    <>
      <div className="title">
        <h1>Pokedex Info</h1>
      </div>
      <div className="mainBody">
        <DataMainControll />
      </div>
    </>
  );
}
