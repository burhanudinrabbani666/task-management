import { useEffect, useState } from "react";
import { CaretDoubleDownIcon } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import {} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import * as z from "zod";
import { HabitSchema, type Habit, type Habits } from "@/modules/habit/schema";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { toast } from "sonner";
import { iconLib, IntialHabitData } from "@/lib/initial-data";
import { HabitItem } from "./habit-item";

// initial
const icons = iconLib;
const habitData = IntialHabitData;

export function Habits() {
  const [habits, setHabits] = useState(() => {
    const storedHabit = localStorage.getItem("habits");
    return storedHabit ? (JSON.parse(storedHabit) as Habits) : habitData;
  });
  const [showAddForm, setShowForm] = useState(false);

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  function handleDelete(id: number) {
    const updatedHabits = habits.filter(
      (habitItem: Habit) => habitItem.id !== id,
    );
    setHabits(updatedHabits);
  }

  function handleToogleDone(id: number) {
    const updatedHabits = habits.map((habit) => {
      if (habit.id === id) return { ...habit, isDone: !habit.isDone };
      else return habit;
    });
    setHabits(updatedHabits);
  }

  function handleCreate(event: React.FormEvent<HTMLFormElement>) {
    try {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const icon = Number(formData.get("icon-input"));

      const newId = habits.length > 0 ? habits[habits.length - 1].id + 1 : 1;

      const newHabit: Habit = {
        id: Number(newId),
        iconId: icon,
        title: formData.get("title")?.toString().trim() || "",
        isDone: false,
      };
      HabitSchema.parse(newHabit);

      setHabits([...habits, newHabit]);
      event.currentTarget.reset();
      setShowForm(!showAddForm);
    } catch (error: unknown) {
      if (error instanceof z.ZodError) {
        const messages = error.issues.map((i) => `${i.message}`).join("\n");
        toast.error(messages);
      }
      event.currentTarget.reset();
    }
  }

  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <form>
          <Label className="hidden"></Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Habit"></SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Habit</SelectItem>
              <SelectItem value="2">Notes</SelectItem>
              <SelectItem value="3">Graph</SelectItem>
            </SelectContent>
          </Select>
        </form>

        <Button onClick={() => setShowForm((show) => !show)}>
          {showAddForm ? "Close" : "Add Habit"}
        </Button>
      </div>
      <div className="flex w-full flex-col gap-4 rounded-sm">
        {showAddForm && (
          <form
            method="post"
            onSubmit={handleCreate}
            className="flex flex-col justify-between gap-4 rounded-xl bg-neutral-50 px-4 py-3 indent-1 inset-ring-2 inset-ring-neutral-300"
          >
            <div className="flex items-center gap-5">
              <Label htmlFor="title" className="hidden">
                Title
              </Label>
              <Select name="icon-input" required>
                <SelectTrigger>
                  <SelectValue placeholder="Icon"></SelectValue>
                </SelectTrigger>
                <SelectContent side="top">
                  {Object.entries(icons).map(([id, Icon]) => (
                    <SelectItem key={id} value={String(id)}>
                      <Icon weight="duotone" />
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Input
                id="title"
                type="text"
                name="title"
                className="border-none px-0 text-lg"
                required
                placeholder="Write your habit here..."
              />
            </div>
            <Button
              type="submit"
              className="w-fit border-none text-neutral-50 hover:cursor-pointer active:cursor-pointer"
              variant="default"
              size="sm"
            >
              Create
            </Button>
          </form>
        )}
        <ul className="flex flex-col-reverse gap-2">
          {habits.map((habit: Habit) => (
            <HabitItem
              key={habit.id}
              habit={habit}
              onDelete={handleDelete}
              onToogleDone={handleToogleDone}
            />
          ))}
        </ul>
        <div
          className={cn(
            "flex items-center justify-center gap-4 opacity-0",
            habits.length > 3 && "opacity-50",
          )}
        >
          <span>Scroll</span> <CaretDoubleDownIcon />
        </div>
      </div>
    </div>
  );
}
