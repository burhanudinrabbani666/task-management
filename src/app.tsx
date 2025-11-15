import { PlusIcon } from "@phosphor-icons/react";
import { Navigation } from "./components/navigation";
import { TaskTab } from "./components/task-tab";
import { Button } from "./components/ui/button";

export default function App() {
  return (
    <div className="flex max-w-2xl flex-col gap-10">
      <Navigation />

      <TaskTab />

      <Button className="fixed right-1/9 bottom-1/6 rounded-md bg-indigo-500 p-1 text-neutral-50 hover:bg-indigo-600">
        <PlusIcon size={35} weight="bold" />
      </Button>
    </div>
  );
}
