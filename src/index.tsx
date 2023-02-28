import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<App />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
