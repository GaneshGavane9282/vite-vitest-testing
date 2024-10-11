import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Greet from "./components/greet/Greet.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <Greet />
  </StrictMode>
);
