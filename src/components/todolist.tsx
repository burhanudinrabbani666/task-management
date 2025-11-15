import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import {
  PencilCircleIcon,
  TrashIcon,
  DotsThreeIcon,
  CheckSquareIcon,
} from "@phosphor-icons/react";

const taskList = [
  { id: 1, title: "Listening LoveLess by MBV", isDone: false },
  { id: 2, title: "Make Ui Component", isDone: true },
  { id: 3, title: "learning Alghorithm", isDone: false },
];

export function Tasks() {
  return (
    <div className="flex items-start justify-between gap-4 rounded-sm border border-neutral-300 p-3">
      <div className="flex w-full flex-col gap-1 rounded-sm">
        <h3 className="mb-2 font-semibold">Tasks</h3>
        <ul className="flex flex-col gap-2">
          {taskList.map((taskAlbum) => (
            <TaskItem
              key={taskAlbum.id}
              title={taskAlbum.title}
              isDone={taskAlbum.isDone}
            />
          ))}
        </ul>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <DotsThreeIcon className="" size={20} fill="bold" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-5 flex min-w-fit flex-col gap-1 p-2">
          <Button className="flex justify-start gap-3 rounded-b-none border border-b-neutral-300 text-neutral-700 hover:underline">
            <PencilCircleIcon />
            <span>Edit</span>
          </Button>
          <Button className="flex justify-start gap-3 rounded-b-none border border-b-neutral-300 text-neutral-700 hover:underline">
            <TrashIcon />
            <span>Delete</span>
          </Button>
          <Button className="flex justify-start gap-3 rounded-b-none border border-b-neutral-300 text-neutral-700 hover:underline">
            <CheckSquareIcon />
            <span>Add Habit</span>
          </Button>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export function TaskItem({
  title,
  isDone,
}: {
  title: string;
  isDone: boolean;
}) {
  if (isDone) {
    return (
      <li className="flex gap-2 line-through opacity-50">
        <input type="checkbox" /> {title}
      </li>
    );
  }
  return (
    <li className="flex gap-2">
      <input type="checkbox" /> {title}
    </li>
  );
}
