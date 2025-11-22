import "@fontsource-variable/inter";
import { Dashboard } from "./components/dashboard";
import { Top } from "./components/top";
import { Hero } from "./components/hero";
import { Footer } from "./components/footer";

export default function App() {
  return (
    <div className="flex max-w-2xl flex-col gap-20">
      <Top />
      <Hero />
      <Dashboard />
      <Footer />
    </div>
  );
}
