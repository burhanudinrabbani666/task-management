import { CheckCircleIcon } from "@phosphor-icons/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useState } from "react";

type Greeting1 = {
  id: number;
  language: string;
  greeting: string;
};

type greetings = Greeting1[];

const greetingData: greetings = [
  { id: 1, language: "English", greeting: `Welcome` },
  { id: 2, language: "Arab", greeting: ` أهلاً وسهل` },
  { id: 3, language: "Germany", greeting: `Willkommen` },
  { id: 4, language: "Mandarin", greeting: `欢迎` },
  { id: 5, language: "Korea", greeting: `어서 오세요` },
  { id: 6, language: "Japanese", greeting: `いらっしゃいませ` },
  { id: 7, language: "bahasa", greeting: `Selamat Datang` },
];

const inintialUsername: string = "";

export function Hero() {
  const [username, setUsername] = useState(inintialUsername);
  const getId = Math.trunc(Math.random() * greetingData.length);

  function handleUsername(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    setUsername(formData.get("title")?.toString().trim() || "");
  }

  if (!username) {
    return (
      <header className="flex flex-col items-center gap-1">
        <div className="flex gap-2 text-2xl">
          <span>{greetingData[getId].greeting}, </span>
          <form className="flex gap-1" method="post" onSubmit={handleUsername}>
            <Label htmlFor="title" className="hidden">
              username
            </Label>
            <Input
              id="title"
              name="title"
              type="text"
              className="border-0 p-0 text-2xl"
              placeholder="Write Yourname here..."
            />
            <Button variant="ghost" type="submit">
              <CheckCircleIcon />
            </Button>
          </form>
        </div>
        <p className="opacity-50">
          keep up the spirit to maintain your good habits
        </p>
      </header>
    );
  }

  return (
    <header className="flex flex-col items-center gap-1 text-xl">
      <div className="flex gap-2">
        <span>{greetingData[getId].greeting}, </span>
        <h1>{username}</h1>
      </div>
      <p className="text-lg opacity-50">
        keep up the spirit to maintain your good habits
      </p>
    </header>
  );
}
