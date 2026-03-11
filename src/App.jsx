import "/src/styles/App.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { AboutPk } from "./pages/AboutPk";
import { PokemonsDetails } from "./pages/PokemonsDetails";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<AboutPk />} />
        <Route path="/pokemon/:id" element={<PokemonsDetails />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
