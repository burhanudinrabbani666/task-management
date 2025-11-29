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

export const iconsInt = [
  { id: 1, name: "book icon", iconSlug: BookIcon },
  { id: 2, name: "heart icon", iconSlug: HeartIcon },
  { id: 3, name: "bed icon", iconSlug: BedIcon },
  { id: 4, name: "game controller icon", iconSlug: GameControllerIcon },
  { id: 5, name: "basketball icon", iconSlug: BasketballIcon },
  { id: 6, name: "pint glass icon", iconSlug: PintGlassIcon },
  { id: 7, name: "footprint icon", iconSlug: FootprintsIcon },
  { id: 8, name: "handspraying icon", iconSlug: HandsPrayingIcon },
  { id: 9, name: "desktop icon", iconSlug: DesktopIcon },
  { id: 10, name: "barbell icon", iconSlug: BarbellIcon },
];

export const IntialHabitData: Habits = [
  { id: 1, icon: getIcon(1), title: "Study", isDone: false },
  { id: 2, icon: getIcon(2), title: "Meditation", isDone: false },
  { id: 3, icon: getIcon(3), title: "Sleep 6 Hours", isDone: false },
];

function getIcon(idIcon: number) {
  const getIconObj = iconsInt.find((icon) => icon.id === idIcon);
  return getIconObj?.iconSlug;
}

localStorage.setItem("habit", JSON.stringify(IntialHabitData));
