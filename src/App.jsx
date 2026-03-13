import "/src/styles/App.css";

import { Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { AboutPk } from "./pages/AboutPk";
import { PokemonsDetails } from "./pages/PokemonsDetails";
import { PokemonTeam } from "./pages/PokemonTeam";
import { MainLayout } from "./pages/_layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<AboutPk />} />
        <Route path="pokemon/:id" element={<PokemonsDetails />} />
        <Route path="pokemonTeam" element={<PokemonTeam />} />
      </Route>
    </Routes>
  );
}

export default App;
