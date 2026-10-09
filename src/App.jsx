import "./styles/App.css";
import { Route, Routes } from "react-router";
import { PATHS } from "./routes/paths.jsx";
import { MainLayout } from "./pages/_layout";
import { Home } from "./pages/Home";
import { AboutPk } from "./pages/AboutPk";
import { PokemonsDetails } from "./pages/PokemonsDetails";
import { PokemonTeam } from "./pages/PokemonTeam";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path={PATHS.HOME} element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path={PATHS.ABOUT} element={<AboutPk />} />
        <Route path={PATHS.POKEMON_DETAILS} element={<PokemonsDetails />} />
        <Route path={PATHS.POKEMON_TEAM} element={<PokemonTeam />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
