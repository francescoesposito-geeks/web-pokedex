import "/src/styles/App.css";
import { Navbar } from "./components/Navbar";
import { DataMainControll } from "./components/DataMainControll";
import { Footer } from "./components/Footer";
// https://pokeapi.co/api/v2/pokemon/

function App() {
  return (
    <>
      <Navbar />
      <DataMainControll />
      <Footer />
    </>
  );
}

export default App;
