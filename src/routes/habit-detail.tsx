import { Link, useParams } from "react-router";
import { ArrowLeftIcon } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";

export function HabitDetail() {
  const params = useParams();
  const { habitId } = params;

  // TODO: Find/get habit by id
  console.log(habitId);
  // const habitIdNumber = Number(habitId);

  // if (!habit) {
  //   return <div><p>Habit not found</p></div>
  // }

  return (
    <div className="space-y-5 px-6">
      <Button asChild variant="ghost" className="border-0">
        <Link to="/">
          <ArrowLeftIcon />
        </Link>
      </Button>

      <div>
        <h2>...</h2>
      </div>
    </div>
  );
}
