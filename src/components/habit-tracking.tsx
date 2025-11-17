import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import {
  PencilIcon,
  PlusIcon,
  TrashIcon,
  DotsThreeVerticalIcon,
} from "@phosphor-icons/react";
import { useState } from "react";
import { AddHabit } from "./add-habit";

const habitData = [
  { id: 1, title: "Study", isDone: false },
  { id: 2, title: "Workout", isDone: false },
  { id: 3, title: "Meditation", isDone: false },
];

export function OverflowMenu({
  id,
  onDelete,
}: {
  id: number;
  onDelete: (id: number) => void;
}) {
  const tailwindForItem = "flex items-center justify-start gap-3 "; // tailwind valeu
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center rounded-2xl bg-neutral-200/60 py-1">
        <DotsThreeVerticalIcon color="#333" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side="left"
        className="mr-2 flex flex-col gap-4 rounded-sm bg-neutral-200/90 p-4"
      >
        <DropdownMenuItem className={tailwindForItem}>
          <PencilIcon />
          <span>Edit</span>
        </DropdownMenuItem>
        <DropdownMenuItem className={tailwindForItem}>
          <PlusIcon />
          <span>Add notes</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => onDelete(id)}
          className={tailwindForItem}
        >
          <TrashIcon />
          <span>Delete</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function HabitItem({
  HabitId,
  title,
  isDone,
  onDelete,
}: {
  HabitId: number;
  title: string;
  isDone: boolean;
  onDelete: (id: number) => void;
}) {
  const [isDoneValue, setIsDone] = useState(isDone);

  function toogleDone() {
    setIsDone((prev) => !prev);
  }

  return (
    <li
      onClick={toogleDone}
      className={`flex items-center justify-between rounded-xl px-4 py-3 indent-1 ${isDoneValue ? "bg-green-300 transition duration-300" : "bg-neutral-200 transition duration-300"}`}
    >
      <span>{title}</span>
      <OverflowMenu id={HabitId} onDelete={onDelete} />
    </li>
  );
}

export default function Habits() {
  const [habit, setHabits] = useState(habitData);

  function DeleteHabit(idToDelete: number) {
    const updatedHabit = habit.filter(
      (habitItem) => habitItem.id !== idToDelete,
    );
    setHabits(updatedHabit);
  }

  return (
    <div className="flex flex-col items-start justify-between gap-4 rounded-sm border border-neutral-300 p-3">
      <div className="flex w-full flex-col gap-1 rounded-sm">
        <h3 className="mb-2 font-semibold">Habit Tracking</h3>
        <ul className="flex flex-col gap-2">
          {habit.map((habit) => (
            <HabitItem
              key={habit.id}
              HabitId={habit.id}
              title={habit.title}
              isDone={habit.isDone}
              onDelete={DeleteHabit}
            />
          ))}
        </ul>
      </div>
      <AddHabit />
    </div>
  );
}
