import "/src/styles/App.css";
import { Navbar } from "./components/Navbar";
import { DataMainControll } from "./components/DataMainControll";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="mainBody">
        <DataMainControll />
      </div>
      <Footer />
    </>
  );
}

export default App;
