import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "/src/styles/index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { Routes, Route } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* abilita la lettura dell'URl, crea un contesto, e lo mette a disposizione dei figli */}
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
