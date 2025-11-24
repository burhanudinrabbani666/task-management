import { Outlet } from "react-router";
import { Hero } from "../hero";
import { Top } from "../top";
import { Footer } from "../footer";

export function Layout() {
  return (
    <div>
      <header className="mb-18 flex flex-col gap-10">
        <Top />
        <Hero />
      </header>
      <Outlet />
      <Footer />
    </div>
  );
}
