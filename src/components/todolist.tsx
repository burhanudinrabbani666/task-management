const listening = [
  { id: 1, albumName: "LoveLess", isDone: false },
  { id: 2, albumName: "Souvlaki", isDone: true },
  { id: 3, albumName: "Long Season", isDone: false },
];

export function Tasks() {
  return (
    <div className="border border-neutral-300 p-3 rounded-sm flex flex-col gap-1">
      <h3 className="font-semibold ">Tasks</h3>
      <ul className="flex flex-col gap-1">
        {listening.map((taskAlbum) => (
          <TaskItem
            key={taskAlbum.id}
            title={taskAlbum.albumName}
            isDone={taskAlbum.isDone}
          />
        ))}
      </ul>
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
      <li className="opacity-50 line-through flex gap-2">
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
