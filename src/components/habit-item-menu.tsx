import {
  DotsThreeIcon,
  EyeIcon,
  PlusIcon,
  TrashIcon,
} from "@phosphor-icons/react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Link } from "react-router";

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
        <DropdownMenuItem asChild>
          <Link to={`/habit/${id}`}>
            <EyeIcon weight="duotone" />
            <span>View</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <PlusIcon />
          <span>Add notes</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onDelete(id)}>
          <TrashIcon weight="duotone" />
          <span>Delete</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
