import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import {
  PencilIcon,
  PlusIcon,
  TrashIcon,
  DotsThreeVerticalIcon,
} from "@phosphor-icons/react";

export function OverflowMenu() {
  const tailwindForItem = "flex items-center justify-start gap-3 ";
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center rounded-2xl bg-neutral-200/60 py-1">
        <DotsThreeVerticalIcon color="#333" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side="left"
        className="mr-2 flex flex-col gap-4 rounded-sm bg-neutral-200/90 p-4"
      >
        <DropdownMenuItem className={tailwindForItem}>
          <PencilIcon />
          <span>Edit</span>
        </DropdownMenuItem>
        <DropdownMenuItem className={tailwindForItem}>
          <PlusIcon />
          <span>Add notes</span>
        </DropdownMenuItem>
        <DropdownMenuItem className={tailwindForItem}>
          <TrashIcon />
          <span>Delete</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
