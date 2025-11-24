import { Link, useParams } from "react-router";
import { Button } from "../ui/button";
import { ArrowLeftIcon } from "@phosphor-icons/react";

export function HabitDetail() {
  const params = useParams();
  const { habitId } = params;
  return (
    <div className="space-y-5 px-6">
      <Button asChild variant="ghost" className="border-0">
        <Link to="/">
          <ArrowLeftIcon />
        </Link>
      </Button>
      <div>ID : {habitId}</div>
    </div>
  );
}
