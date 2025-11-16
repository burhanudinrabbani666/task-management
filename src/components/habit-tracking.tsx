// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuTrigger,
//   DropdownMenuContent,
// } from "@/components/ui/dropdown-menu";
// import {
//   PencilCircleIcon,
//   TrashIcon,
//   DotsThreeIcon,
//   HeartIcon,
// } from "@phosphor-icons/react";

import { OverflowMenu } from "./overflow-menu";

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
        <ul className="flex flex-col gap-2">
          {habitData.map((habit) => (
            <HabitItem
              key={habit.id}
              title={habit.title}
              isDone={habit.isDone}
            />
          ))}
        </ul>
      </div>
      {/* <DropdownMenu>
        <DropdownMenuTrigger>
          <DotsThreeIcon className="" size={20} fill="bold" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-5 flex min-w-fit flex-col gap-1 p-2">
          <Button className="flex justify-start gap-3 rounded-b-none border border-b-neutral-300 text-neutral-700 hover:underline">
            <PencilCircleIcon />
            <span>Edit</span>
          </Button>
          <Button className="flex justify-start gap-3 rounded-b-none border border-b-neutral-300 text-neutral-700 hover:underline">
            <TrashIcon />
            <span>Delete</span>
          </Button>
          <Button className="flex justify-start gap-3 rounded-b-none border border-b-neutral-300 text-neutral-700 hover:underline">
            <HeartIcon />
            <span>Add Habit</span>
          </Button>
        </DropdownMenuContent>
      </DropdownMenu> */}
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
  if (isDone) {
    return (
      <li className="flex items-center justify-between rounded bg-green-300 px-4 py-3 indent-1">
        <span>{title}</span>
        <OverflowMenu />
      </li>
    );
  }
  return (
    <li className="flex items-center justify-between rounded border border-neutral-200 px-4 py-3 indent-1">
      <span>{title}</span>
      <OverflowMenu />
    </li>
  );
}
