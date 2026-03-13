import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "/src/styles/index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { Routes, Route } from "react-router";
import { ToastContainer, Flip } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* abilita la lettura dell'URl, crea un contesto, e lo mette a disposizione dei figli */}
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<App />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Flip}
      />
    </BrowserRouter>
  </StrictMode>,
);
