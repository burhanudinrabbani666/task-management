import { Link, useParams } from "react-router";
import { Button } from "../ui/button";
import {
  ArrowLeftIcon,
  BedIcon,
  BookIcon,
  HeartIcon,
} from "@phosphor-icons/react";
import z from "zod";

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
        <h2>{habitData[idData - 1].title}</h2>
      </div>
    </div>
  );
}
