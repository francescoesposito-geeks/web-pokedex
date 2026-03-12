import "/src/styles/App.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { AboutPk } from "./pages/AboutPk";
import { PokemonsDetails } from "./pages/PokemonsDetails";
import { PokemonTeam } from "./pages/PokemonTeam";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPk />} />
        <Route path="/pokemon/:id" element={<PokemonsDetails />} />
        <Route path="/pokemonTeam" element={<PokemonTeam />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
