import "/src/styles/App.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { AboutPk } from "./pages/AboutPk";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<AboutPk />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
