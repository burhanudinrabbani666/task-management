export function Profile() {
  const imageUrl = "https://i.imgur.com/MK3eW3Am.jpg";
  const name = "Katherine Johnson";

  return <img className="image" src={imageUrl} alt={name} />;
}
