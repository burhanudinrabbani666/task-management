import { Link, useParams } from "react-router";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, PlusIcon, TrashIcon } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { getIcon } from "@/lib/initial-data";
import type { Habit } from "@/modules/habit/schema";
import { useState } from "react";

export function HabitDetail() {
  const params = useParams();
  const { habitId } = params;
  const idData = Number(habitId);

  // Get habit data from local storageb
  const habitData = localStorage.getItem("habits");
  const [habit, setHabit] = useState(habitData);

  function handleDelete(id = Number(habitId)) {
    const parsedHabits = habit ? (JSON.parse(habit) as Habit[]) : [];
    const updatedHabits = parsedHabits.filter(
      (habitItem: Habit) => habitItem.id !== id,
    );
    setHabit(JSON.stringify(updatedHabits));
    localStorage.setItem("habits", JSON.stringify(updatedHabits));
  }

  const parsedHabit = habit ? (JSON.parse(habit) as Habit[]) : [];

  return (
    <div className="space-y-5 px-6">
      <Button asChild variant="ghost" className="border-0">
        <Link to="/">
          <ArrowLeftIcon />
        </Link>
      </Button>
      <div>
        {(() => {
          const habit = parsedHabit.find((habit) => habit.id === idData);
          if (!habit)
            return (
              <div className="flex h-36 items-center justify-center">
                <span>Habit not found</span>
              </div>
            );
          const Icon = getIcon(habit.iconId);
          return (
            <div
              className={cn(
                "flex items-center gap-4 rounded-xl px-4 py-3 indent-1 inset-ring-2 inset-ring-neutral-300",
                habit.isDone &&
                  "bg-[url(/public/check-circle.svg)] bg-size-[100px] bg-right bg-no-repeat inset-ring-2 inset-ring-green-700 transition duration-500",
              )}
            >
              <div className="flex w-full justify-between">
                <div className="flex gap-4">
                  <Icon size={32} weight="duotone" />
                  <span className="text-lg font-semibold">
                    {habit.title}
                  </span>{" "}
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    className="border-0 hover:bg-neutral-200"
                  >
                    <PlusIcon size={25} weight="bold" />
                  </Button>
                  <Button
                    variant="ghost"
                    className="border-0 hover:bg-neutral-200"
                    onClick={() => handleDelete()}
                  >
                    <TrashIcon size={25} weight="duotone" />
                  </Button>
                </div>
              </div>
            </div>
          );
        })()}
      </div>
    </div>
  );
}
