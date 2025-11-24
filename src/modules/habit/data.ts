import { BookIcon, HeartIcon, BedIcon } from "@phosphor-icons/react";

import { type Habits } from "@/modules/habit/schema";

export const habitIconsData = [BookIcon, HeartIcon, BedIcon];

export const initialHabitsData: Habits = [
  { id: 1, icon: habitIconsData[0], title: "Study", isDone: false },
  { id: 2, icon: habitIconsData[1], title: "Meditation", isDone: false },
  { id: 3, icon: habitIconsData[2], title: "Sleep 6 Hours", isDone: false },
];
