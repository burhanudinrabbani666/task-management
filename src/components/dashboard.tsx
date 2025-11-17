import Habits from "./habit-tracking";
import dayjs from "dayjs";

const dayTime = dayjs().format("D MMMM YYYY");

export function Dashboard() {
  return (
    <div className="flex flex-col gap-3 px-5">
      <div className="flex items-center justify-between px-4">
        <span> {dayTime} </span>
      </div>
      <div id="content-box" className="w-full">
        <div className="flex flex-col gap-2">
          <Habits />
        </div>
      </div>
    </div>
  );
}
