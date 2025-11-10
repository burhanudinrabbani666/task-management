const habitData = [
  { id: 1, title: "Study", isDone: true },
  { id: 2, title: "Workout", isDone: false },
  { id: 3, title: "Meditation", isDone: false },
];

export function Habits() {
  return (
    <div className="border border-neutral-300 p-3 rounded-sm flex flex-col gap-1">
      <h3 className="font-semibold ">Habit Tracking</h3>
      <ul className="flex flex-col gap-1">
        {habitData.map((habit) => (
          <HabitItem key={habit.id} title={habit.title} isDone={habit.isDone} />
        ))}
      </ul>
    </div>
  );
}

export function HabitItem({
  title,
  isDone,
}: {
  title: string;
  isDone: boolean;
}) {
  if (isDone) {
    return (
      <li className="py-1 bg-green-300 indent-1 rounded">
        <span>{title}</span>
      </li>
    );
  }
  return (
    <li className="py-1 border border-neutral-200 indent-1 rounded">
      <span>{title}</span>
    </li>
  );
}
