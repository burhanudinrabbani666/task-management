const noteData = [
  {
    id: 1,
    title: `React`,
    note: "React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.",
  },
];

export function NoteItem({ title, notes }: { title: string; notes: string }) {
  return (
    <div className="flex h-18 flex-col gap-1 rounded-sm border border-neutral-300 p-3">
      <h3 className="font-semibold">{title}</h3>
      <p className="truncate opacity-80">{notes}</p>
    </div>
  );
}

export function NotesRender() {
  return (
    <div>
      {noteData.map((noteData) => (
        <NoteItem
          key={noteData.id}
          title={noteData.title}
          notes={noteData.note}
        />
      ))}
    </div>
  );
}
