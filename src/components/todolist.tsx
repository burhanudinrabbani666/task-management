const taskList = [
  { id: 1, title: "Listening LoveLess by My Bloody Valentine", isDone: false },
  { id: 2, title: "Make Ui Component", isDone: true },
  { id: 3, title: "learning Data Structure and Alghorithm", isDone: false },
];

export function Tasks() {
  return (
    <div className="flex flex-col gap-1 rounded-sm border border-neutral-300 p-3">
      <h3 className="font-semibold">Tasks</h3>
      <ul className="flex flex-col gap-1">
        {taskList.map((taskAlbum) => (
          <TaskItem
            key={taskAlbum.id}
            title={taskAlbum.title}
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
      <li className="flex gap-2 line-through opacity-50">
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
