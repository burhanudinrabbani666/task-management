import "@fontsource-variable/inter";
import { Navigation } from "./components/navigation";
import { TaskTab } from "./components/task-tab";

export default function App() {
  return (
    <div className="flex max-w-2xl flex-col gap-10">
      <Navigation />
      <TaskTab />
    </div>
  );
}
