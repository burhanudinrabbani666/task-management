import { type Habits } from "@/modules/habit/schema";

import {
  BookIcon,
  HeartIcon,
  BedIcon,
  BasketballIcon,
  PintGlassIcon,
  FootprintsIcon,
  GameControllerIcon,
  HandsPrayingIcon,
  BarbellIcon,
  DesktopIcon,
} from "@phosphor-icons/react";

export const iconLib: Record<number, React.ElementType> = {
  1: BookIcon,
  2: HeartIcon,
  3: BedIcon,
  4: GameControllerIcon,
  5: BasketballIcon,
  6: PintGlassIcon,
  7: FootprintsIcon,
  8: HandsPrayingIcon,
  9: DesktopIcon,
  10: BarbellIcon,
};

export const IntialHabitData: Habits = [
  { id: 1, iconId: 1, title: "Study", isDone: false },
  { id: 2, iconId: 2, title: "Meditation", isDone: false },
  { id: 3, iconId: 3, title: "Sleep 6 Hours", isDone: false },
];

export function getIcon(id: number) {
  return iconLib[id] || iconLib[1];
}
