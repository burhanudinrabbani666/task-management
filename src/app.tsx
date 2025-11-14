// import { Tasks } from "./tasks";
import { Navigation } from "./components/navigation";
import { TaskTab } from "./components/task-tab";
import "@fontsource-variable/inter";

export default function App() {
  return (
    <div className="flex flex-col gap-10">
      <Navigation />
      <TaskTab />
    </div>
  );
}
