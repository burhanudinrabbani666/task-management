import { NotesRender } from "./note-taking";
import { Tasks } from "./todolist";
import { Habits } from "./habit-tracking";
import dayjs from "dayjs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const dayTime = dayjs().format("D MMMM YYYY");

export function TaskTab() {
  return (
    <div className="flex flex-col gap-3 px-5">
      <div className="flex items-center justify-between px-4">
        <span> {dayTime} </span>
        <DropdownMenu>
          <DropdownMenuTrigger className="bg- rounded-2xl bg-violet-700 px-4 py-1 font-bold text-neutral-100 hover:bg-violet-800">
            Add +
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-4">
            <DropdownMenuLabel>User Control panel</DropdownMenuLabel>
            <DropdownMenuSeparator />
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
      <div id="content-box" className="w-full">
        <div className="flex flex-col gap-2">
          <NotesRender />
          <Tasks />
          <Habits />
        </div>
      </div>
    </div>
  );
}
