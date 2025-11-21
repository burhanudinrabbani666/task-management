// import { Tasks } from "./tasks";

import { PlusIcon } from "@phosphor-icons/react";

export function AddHabit() {
  return (
    <button className="flex w-fit items-center justify-center gap-2 rounded-lg bg-indigo-500 px-4 py-2 font-bold text-neutral-100">
      <PlusIcon weight="bold" size={16} />
      <span>New</span>
    </button>
  );
}
