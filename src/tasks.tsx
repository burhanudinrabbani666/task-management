const listening = [
  { id: 1, albumName: "LoveLess", isDone: false },
  { id: 2, albumName: "Souvlaki", isDone: false },
  { id: 3, albumName: "Long Season", isDone: false },
];

export function Tasks() {
  return (
    <div>
      <h2 className="">Tasks</h2>
      <ul>
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
    return null;
  }
  return <li>{title} still not played</li>;
}
