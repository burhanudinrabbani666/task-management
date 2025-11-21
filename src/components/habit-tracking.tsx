import {
  PencilIcon,
  PlusIcon,
  TrashIcon,
  DotsThreeVerticalIcon,
} from "@phosphor-icons/react";
import { useState } from "react";
import { AddHabit } from "./add-habit";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

type Habit = {
  id: number;
  title: string;
  isDone: boolean;
};

type Habits = Habit[];

const habitData: Habits = [
  { id: 1, title: "Study", isDone: false },
  { id: 2, title: "Workout", isDone: false },
  { id: 3, title: "Meditation", isDone: false },
];

export function HabitItemMenu({
  id,
  onDelete,
}: {
  id: number;
  onDelete: (id: number) => void;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          <DotsThreeVerticalIcon color="#333" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="left">
        <DropdownMenuItem>
          <PencilIcon />
          <span>Edit</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <PlusIcon />
          <span>Add notes</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onDelete(id)}>
          <TrashIcon />
          <span>Delete</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function HabitItem({
  habit,
  onDelete,
  onToogleDone,
}: {
  habit: Habit;
  onDelete: (id: number) => void;
  onToogleDone: (id: number) => void;
}) {
  return (
    <li
      onClick={() => onToogleDone(habit.id)}
      className={cn(
        "flex items-center justify-between rounded-xl px-4 py-3 indent-1",
        habit.isDone
          ? "bg-green-300 transition duration-300"
          : "bg-neutral-200 transition duration-300",
      )}
    >
      <span>{habit.title}</span>
      <HabitItemMenu id={habit.id} onDelete={onDelete} />
    </li>
  );
}

export function Habits() {
  const [habits, setHabits] = useState(habitData);

  function handleDelete(id: number) {
    const updatedHabits = habits.filter((habitItem) => habitItem.id !== id);
    setHabits(updatedHabits);
  }

  function handleToogleDone(id: number) {
    const updatedHabits = habits.map((habit) => {
      if (habit.id === id) return { ...habit, isDone: !habit.isDone };
      else return habit;
    });

    setHabits(updatedHabits);
  }

  return (
    <div className="flex flex-col items-start justify-between gap-4 rounded-sm border border-neutral-300 p-3">
      <div className="flex w-full flex-col gap-1 rounded-sm">
        <h3 className="mb-2 font-semibold">Habit Tracking</h3>
        <ul className="flex flex-col gap-2">
          {habits.map((habit) => (
            <HabitItem
              key={habit.id}
              habit={habit}
              onDelete={handleDelete}
              onToogleDone={handleToogleDone}
            />
          ))}
        </ul>
      </div>
      <AddHabit />
    </div>
  );
}
