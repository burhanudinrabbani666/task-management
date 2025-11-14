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
          <DropdownMenuTrigger className="bg- rounded-2xl px-4 py-1 font-bold text-neutral-100">
            Add
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
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
