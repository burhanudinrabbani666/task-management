import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  DotsThreeIcon,
  PencilCircleIcon,
  TrashIcon,
} from "@phosphor-icons/react";

const habitData = [
  { id: 1, title: "Study", isDone: true },
  { id: 2, title: "Workout", isDone: false },
  { id: 3, title: "Meditation", isDone: false },
];

export function Habits() {
  return (
    <div className="flex items-start justify-between gap-4 rounded-sm border border-neutral-300 p-3">
      <div className="flex w-full flex-col gap-1 rounded-sm">
        <h3 className="mb-2 font-semibold">Habit Tracking</h3>
        <ul className="flex flex-col gap-1">
          {habitData.map((habit) => (
            <HabitItem
              key={habit.id}
              title={habit.title}
              isDone={habit.isDone}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export function HabitItem({
  title,
  isDone,
}: {
  title: string;
  isDone: boolean;
}) {
  return (
    <li
      className={cn(
        "flex justify-between rounded border px-2 py-3 indent-1",
        isDone && "bg-green-300",
        !isDone && "bg-neutral-200",
      )}
    >
      <h4>{title}</h4>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <DotsThreeIcon className="" size={20} fill="bold" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-5 flex min-w-fit flex-col gap-1 p-2">
          <DropdownMenuItem>
            <PencilCircleIcon />
            <span>Edit</span>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <TrashIcon />
            <span>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </li>
  );
}
