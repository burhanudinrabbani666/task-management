import { Link, useParams } from "react-router";
import { Button } from "../components/ui/button";
import {
  ArrowLeftIcon,
  BedIcon,
  BookIcon,
  HeartIcon,
} from "@phosphor-icons/react";
import type { Habits } from "@/components/modules/habit/schema";
import { cn } from "@/lib/utils";

const iconData = [BookIcon, HeartIcon, BedIcon];

const habitData: Habits = [
  { id: 1, icon: iconData[0], title: "Study", isDone: false },
  { id: 2, icon: iconData[1], title: "Meditation", isDone: false },
  { id: 3, icon: iconData[2], title: "Sleep 6 Hours", isDone: true },
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
            <div
              className={cn(
                "flex items-center gap-4 rounded-xl bg-amber-100 px-4 py-3 indent-1 inset-ring-2 inset-ring-neutral-300",
                habit.isDone &&
                  "bg-[url(/public/check-circle.svg)] bg-size-[100px] bg-right bg-no-repeat inset-ring-2 inset-ring-green-700 transition duration-500",
              )}
            >
              <Icon size={32} />
              <span className="text-lg font-semibold">{habit.title}</span>{" "}
            </div>
          );
        })()}
      </div>
    </div>
  );
}
