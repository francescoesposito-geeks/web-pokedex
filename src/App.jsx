import "/src/styles/App.css";
import { Navbar } from "./components/Navbar";
import { DataMainControll } from "./components/DataMainControll";
import { Footer } from "./components/Footer";

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
