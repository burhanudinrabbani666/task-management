export function Profile({
  imageUrl,
  name,
}: {
  imageUrl: string;
  name: string;
}) {
  return <img className="image" src={imageUrl} alt={name} />;
}
