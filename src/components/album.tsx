type Album = {
  id: number;
  title: string;
  isDone: boolean;
};

type Albums = Album[];

const albumData: Albums = [
  { id: 1, title: "LoveLess", isDone: false },
  { id: 2, title: "Souvlaki", isDone: true },
  { id: 3, title: "Long Season", isDone: false },
];

export function Albums() {
  return (
    <div className="border border-neutral-300 p-3 rounded-sm flex flex-col gap-1">
      <h3 className="font-semibold ">Song Albums</h3>
      <ul className="flex flex-col gap-1">
        {albumData.map((album) => (
          <AlbumItem key={album.id} album={album} />
        ))}
      </ul>
    </div>
  );
}

export function AlbumItem({ album }: { album: Album }) {
  if (album.isDone) {
    return (
      <li className="opacity-50 line-through flex gap-2">
        <input type="checkbox" /> {album.title}
      </li>
    );
  }

  return (
    <li className="flex gap-2">
      <input type="checkbox" /> {album.title}
    </li>
  );
}
