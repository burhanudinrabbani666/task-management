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

export function Hero() {
  const getId = Math.trunc(Math.random() * greetingData.length);
  return (
    <header className="flex flex-col items-center gap-1">
      <div className="flex gap-2 text-2xl">
        <span>{greetingData[getId].greeting}, </span>
        <h1 className="font-semibold">Burhanudin</h1>
      </div>
      <p className="opacity-50">
        keep up the spirit to maintain your good habits
      </p>
    </header>
  );
}
