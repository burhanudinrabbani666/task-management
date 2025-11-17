import "@fontsource-variable/inter";
import { Navigation } from "./components/navigation";
import { Dashboard } from "./components/dashboard";

export default function App() {
  return (
    <div className="flex max-w-2xl flex-col gap-10">
      <Navigation />
      <Dashboard />
    </div>
  );
}
