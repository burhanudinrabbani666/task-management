const noteData = [
  {
    id: 1,
    title: `React`,
    noteValue:
      "React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.",
  },
];

export function NoteItem({ title, notes }: { title: string; notes: string }) {
  return (
    <section className="border border-neutral-300 p-3 rounded-sm flex flex-col gap-1 h-18">
      <h3 className="font-semibold">{title}</h3>
      <span className=" opacity-80 truncate">{notes}</span>
    </section>
  );
}

export function Notes() {
  return (
    <ul>
      {noteData.map((note) => (
        <li key={note.id}>
          <NoteItem title={note.title} notes={note.noteValue} />
        </li>
      ))}
    </ul>
  );
}
