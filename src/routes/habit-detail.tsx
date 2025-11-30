import { Link, useParams } from "react-router";
import { Button } from "../components/ui/button";
import { ArrowLeftIcon } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { getIcon, IntialHabitData } from "@/lib/initial-data";

const habitData = IntialHabitData;
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
          const Icon = getIcon(habit.iconId);
          return (
            <div
              className={cn(
                "flex items-center gap-4 rounded-xl bg-amber-100 px-4 py-3 indent-1 inset-ring-2 inset-ring-neutral-300",
                habit.isDone &&
                  "bg-[url(/public/check-circle.svg)] bg-size-[100px] bg-right bg-no-repeat inset-ring-2 inset-ring-green-700 transition duration-500",
              )}
            >
              <Icon size={32} weight="duotone" />
              <span className="text-lg font-semibold">{habit.title}</span>{" "}
            </div>
          );
        })()}
      </div>
    </div>
  );
}
