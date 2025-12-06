import { getIcon } from "@/lib/initial-data";
import { cn } from "@/lib/utils";
import type { Habit } from "@/modules/habit/schema";
import { Button } from "./ui/button";
import { HabitItemMenu } from "./habit-item-menu";

export function HabitItem({
  habit,
  onDelete,
  onToogleDone,
}: {
  habit: Habit;
  onDelete: (id: number) => void;
  onToogleDone: (id: number) => void;
}) {
  const Icon = getIcon(habit.iconId);
  return (
    <li
      className={cn(
        "flex items-baseline justify-between rounded-xl bg-amber-100 px-4 py-3 indent-1 inset-ring-2 inset-ring-neutral-300",
        habit.isDone &&
          "bg-[url(/public/check-circle.svg)] bg-size-[100px] bg-bottom-right bg-no-repeat inset-ring-2 inset-ring-green-700 transition duration-500",
      )}
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <Icon size={28} weight="duotone" />
          <span className="text-lg font-semibold">{habit.title}</span>
        </div>
        <Button
          className={cn(
            "hover:cursor-pointer active:bg-green-700",
            habit.isDone && "border border-green-700 bg-green-700 text-white",
          )}
          variant="ghost"
          size="sm"
          onClick={() => onToogleDone(habit.id)}
        >
          <span className="opacity-70">Check</span>
        </Button>
      </div>
      <HabitItemMenu id={habit.id} onDelete={onDelete} />
    </li>
  );
}
