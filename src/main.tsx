import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "@/index.css";
import App from "@/app.tsx";
import { HabitDetail } from "@/routes/habit-detail";
import { Layout } from "@/components/layouts/layout";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<App />} />
        <Route path="/about-habit/:habitId" element={<HabitDetail />} />
      </Route>
    </Routes>{" "}
  </BrowserRouter>,
);
