// import { Tasks } from "./tasks";
import { Navigation } from "./components/navigation";
import { TaskTab } from "./components/task-tab";
import "@fontsource-variable/inter";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Plus } from "@phosphor-icons/react";

export default function App() {
  return (
    <div className="flex max-w-2xl flex-col gap-10">
      <Navigation />
      <TaskTab />
      <DropdownMenu>
        <DropdownMenuTrigger className="fixed right-1/9 bottom-1/6 rounded-md bg-indigo-500 p-1 text-neutral-50 hover:bg-indigo-600">
          <Plus size={35} weight="bold" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-4">
          <DropdownMenuLabel className="">User Control panel</DropdownMenuLabel>
          <DropdownMenuSeparator className="mx-1 bg-neutral-500" />
          <DropdownMenuItem className="cursor-pointer hover:bg-neutral-400">
            Quick Notes
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer hover:bg-neutral-400">
            Task Manager{" "}
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer hover:bg-neutral-400">
            Add Routine
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
