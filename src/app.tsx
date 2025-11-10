import { Navigation } from "./navigation";
import { WorkTab } from "./components/work-tab";

export default function App() {
  return (
    <div className="flex flex-col items-center  gap-6">
      <Navigation />
      <WorkTab />
    </div>
  );
}
