import "/src/styles/App.css";
import { PATHS } from "/src/routes/paths.jsx";
import { Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { AboutPk } from "./pages/AboutPk";
import { PokemonsDetails } from "./pages/PokemonsDetails";
import { PokemonTeam } from "./pages/PokemonTeam";
import { MainLayout } from "./pages/_layout";

function App() {
  return (
    <Routes>
      <Route path={PATHS.HOME} element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path={PATHS.ABOUT} element={<AboutPk />} />
        <Route path={PATHS.POKEMON_DETAILS} element={<PokemonsDetails />} />
        <Route path={PATHS.POKEMON_TEAM} element={<PokemonTeam />} />
      </Route>
    </Routes>
  );
}

export default App;
