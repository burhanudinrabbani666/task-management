const dataTasks = [
  { id: 1, title: "Loveless", isDone: true },
  { id: 2, title: "Souvlaki", isDone: true },
  { id: 3, title: "Ok Computer", isDone: false },
];

export function Tasks() {
  return (
    <div>
      <h2>Task</h2>
      <ul>
        {dataTasks.map((task) => (
          <TaskItem title={task.title} isDone={task.isDone} />
        ))}
      </ul>

      <h3>Notes</h3>
      <div>
        {dataTasks.map((task) => (
          <Notification title={task.title} isDone={task.isDone} />
        ))}
      </div>
    </div>
  );
}

export function TaskItem({
  title,
  isDone,
}: {
  title: string;
  isDone?: boolean;
}) {
  if (isDone) {
    return null;
  }
  return <li>{title}</li>;
}

function Notification({ title, isDone }: { title: string; isDone: boolean }) {
  if (isDone) {
    return <p> you'r already listening {title}</p>;
  }
  return null;
}
