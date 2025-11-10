import { Notes } from "./note";
import { Albums } from "./album";
import { Habits } from "./habit";

export function WorkTab() {
  return (
    <div className="w-full px-5 flex flex-col gap-3">
      <span>November 10, 2025</span>

      <div id="content-box" className="w-full">
        <div className="flex flex-col gap-2">
          <Notes />
          <Albums />
          <Habits />
        </div>
      </div>
    </div>
  );
}
