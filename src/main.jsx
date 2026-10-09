import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { ToastContainer, Flip } from "react-toastify";
import "./styles/index.css";
import App from "./App.jsx";
import { TeamProvider } from "./context/TeamProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* abilita la lettura dell'URL, crea un contesto e lo mette a disposizione dei figli */}
    <BrowserRouter>
      <TeamProvider>
        <App />
      </TeamProvider>
      <ToastContainer
        position="top-right"
        autoClose={2500}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
        theme="colored"
        transition={Flip}
      />
    </BrowserRouter>
  </StrictMode>,
);
