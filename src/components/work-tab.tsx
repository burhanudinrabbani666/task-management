import { NotesRender } from "./note-taking";
import { Tasks } from "./todolist";
import { Habits } from "./habit-tracking";

export function WorkTab() {
  return (
    <div className="w-full px-5 flex flex-col gap-3">
      <span>November 10, 2025</span>

      <div id="content-box" className="w-full">
        <div className="flex flex-col gap-2">
          <NotesRender />
          <Tasks />
          <Habits />
        </div>
      </div>
    </div>
  );
}
