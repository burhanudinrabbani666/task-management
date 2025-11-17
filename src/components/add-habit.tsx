// import { Tasks } from "./tasks";

import { PlusIcon } from "@phosphor-icons/react";

export function AddHabit() {
  return (
    <a
      href="#"
      className="flex w-full items-center justify-center gap-2 rounded-lg bg-purple-700 px-4 py-2 font-bold text-neutral-100"
    >
      <PlusIcon weight="bold" size={14} />
      <span>Add Habit</span>
    </a>
  );
}
