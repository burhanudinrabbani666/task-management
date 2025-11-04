import { Profile } from "./profile.tsx";

export default function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Profile
        imageUrl="https://upload.wikimedia.org/wikipedia/en/4/4b/My_Bloody_Valentine_-_Loveless.png"
        name="loveless"
      />
      <Profile
        imageUrl="https://upload.wikimedia.org/wikipedia/en/a/a6/Souvlaki_%28album%29_cover.jpg"
        name="souvlaki"
      />
    </div>
  );
}
