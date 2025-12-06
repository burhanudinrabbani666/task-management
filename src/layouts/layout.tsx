import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Top } from "@/components/top";
import { Outlet } from "react-router";

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col gap-8">
      <header className="mb-18 flex flex-col gap-10">
        <Top />
        <Hero />
      </header>
      <Outlet />
      <Footer />
    </div>
  );
}
