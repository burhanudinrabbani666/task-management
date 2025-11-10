import { Tasks } from "./tasks";
import { Navigation } from "./navigation";

export default function App() {
  return (
    <div className="flex flex-col items-center">
      <Navigation />
      <h1>Task Management</h1>
      <Tasks />
    </div>
  );
}
