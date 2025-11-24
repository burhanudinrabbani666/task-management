import { useState } from "react";
import {
  PencilIcon,
  PlusIcon,
  TrashIcon,
  DotsThreeIcon,
  BookIcon,
  HeartIcon,
  BedIcon,
} from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import * as z from "zod";

const HabitSchema = z.object({
  id: z.number().positive(),
  icon: z.any(),
  title: z.string().min(1).max(30),
  isDone: z.boolean(),
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const HabitDataSchema = HabitSchema.array();

type Habits = z.infer<typeof HabitDataSchema>;

const iconData = [BookIcon, HeartIcon, BedIcon];

const habitData: Habits = [
  { id: 1, icon: iconData[0], title: "Study", isDone: false },
  { id: 2, icon: iconData[1], title: "Meditation", isDone: false },
  { id: 3, icon: iconData[2], title: "Sleep 6 Hours", isDone: false },
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
        <Button size="icon-lg" variant="secondary">
          <DotsThreeIcon color="#333" />
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
  habit: z.infer<typeof HabitSchema>;
  onDelete: (id: number) => void;
  onToogleDone: (id: number) => void;
}) {
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
          <habit.icon size={28} weight="duotone" />
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

  function handleCreate(event: React.FormEvent<HTMLFormElement>) {
    try {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);

      const newId = habits.length > 0 ? habits[habits.length - 1].id + 1 : 1;

      const newHabit: z.infer<typeof HabitSchema> = {
        id: Number(newId),
        icon: iconData[Math.trunc(Math.random() * 2)],
        title: formData.get("title")?.toString().trim() || "",
        isDone: false,
      };
      HabitSchema.parse(newHabit);

      setHabits([...habits, newHabit]);
      event.currentTarget.reset();
    } catch (error: unknown) {
      if (error instanceof z.ZodError) {
        const messages = error.issues.map((i) => `${i.message}`).join("\n");
        alert(messages);
        return null;
      }
    }
  }

  return (
    <div className="flex flex-col items-start justify-between gap-4">
      <div className="flex w-full flex-col gap-4 rounded-sm">
        <form
          method="post"
          onSubmit={handleCreate}
          className="flex flex-col justify-between gap-2 rounded-xl bg-neutral-50 px-4 py-3 indent-1 inset-ring-2 inset-ring-neutral-300"
        >
          <div>
            <Label htmlFor="title" className="hidden">
              Title
            </Label>
            <Input
              id="title"
              type="text"
              name="title"
              className="border-none px-0 opacity-50"
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
        <ul className="flex h-96 flex-col gap-2 overflow-scroll">
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
    </div>
  );
}
