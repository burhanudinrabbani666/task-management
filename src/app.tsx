import "@fontsource-variable/inter";
import { Dashboard } from "./components/dashboard";
import { Top } from "./components/top";

export default function App() {
  return (
    <div className="flex max-w-2xl flex-col gap-10">
      <Top />
      <Dashboard />
    </div>
  );
}
