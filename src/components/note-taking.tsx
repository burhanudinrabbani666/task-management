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
} from "@phosphor-icons/react";

const noteData = [
  {
    id: 1,
    title: `React`,
    note: "React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.",
  },
];

export function NoteItem({ title, notes }: { title: string; notes: string }) {
  return (
    <div className="flex h-18 items-start justify-between gap-4 rounded-sm border border-neutral-300 p-3">
      <div className="flex flex-col gap-1 truncate">
        <h3 className="mb-2 font-semibold">{title}</h3>
        <p className="truncate opacity-80">{notes}</p>
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
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export function NotesRender() {
  return (
    <div>
      {noteData.map((noteData) => (
        <NoteItem
          key={noteData.id}
          title={noteData.title}
          notes={noteData.note}
        />
      ))}
    </div>
  );
}
