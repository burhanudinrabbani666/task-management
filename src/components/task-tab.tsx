import { NotesRender } from "./note-taking";

function dateAndNavigation({ time }: { time: string }) {
  return <span>{time}</span>;
}

export function WorkTab() {
  return (
    <div className="w-full px-5 flex flex-col gap-3">
      <span>{dateAndNavigation({ time: "November 10, 2025" })}</span>
      <div id="content-box" className="w-full">
        <NotesRender />
      </div>
    </div>
  );
}
