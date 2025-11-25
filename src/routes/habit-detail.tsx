import { Link, useParams } from "react-router";
import { Button } from "../components/ui/button";
import {
  ArrowLeftIcon,
  BedIcon,
  BookIcon,
  HeartIcon,
} from "@phosphor-icons/react";
import type { Habits } from "@/components/modules/habit/schema";

const iconData = [BookIcon, HeartIcon, BedIcon];

const habitData: Habits = [
  { id: 1, icon: iconData[0], title: "Study", isDone: false },
  { id: 2, icon: iconData[1], title: "Meditation", isDone: false },
  { id: 3, icon: iconData[2], title: "Sleep 6 Hours", isDone: false },
];

export function HabitDetail() {
  const params = useParams();
  const { habitId } = params;
  const idData = Number(habitId);

  return (
    <div className="space-y-5 px-6">
      <Button asChild variant="ghost" className="border-0">
        <Link to="/">
          <ArrowLeftIcon />
        </Link>
      </Button>
      <div>
        {(() => {
          const habit = habitData.find((habit) => habit.id === idData);
          if (!habit) return <div>Habit not found</div>;
          const Icon = habit.icon;
          return (
            <div className="flex w-full items-center gap-8 border px-2">
              <Icon size={32} />
              <span className="text-lg font-semibold">{habit.title}</span>
              <span>{habit.isDone ? "Done" : "Not Done"}</span>
            </div>
          );
        })()}
      </div>
    </div>
  );
}
