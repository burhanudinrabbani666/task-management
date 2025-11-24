import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "@/index.css";
import App from "@/app.tsx";
import { About } from "@/components/routes/about.tsx";
import { Layout } from "@/components/layouts/layout";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>{" "}
  </BrowserRouter>,
);
