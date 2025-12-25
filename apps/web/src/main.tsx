import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AppProviders } from "./1_apps/providers/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProviders />
  </StrictMode>
);
