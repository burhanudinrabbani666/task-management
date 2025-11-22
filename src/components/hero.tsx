const greeting = [
  "Hi",
  "Bonjour",
  "Hallo",
  "Hola",
  "你好",
  "안녕하세요",
  "こんにちは",
  "Selamat Datang",
];

export function Hero() {
  return (
    <header className="flex flex-col items-center gap-1">
      <div className="flex gap-2 text-2xl">
        <span>{greeting[Math.trunc(Math.random() * greeting.length)]},</span>
        <h1 className="font-semibold">Burhanudin</h1>
      </div>
      <p className="opacity-50">
        keep up the spirit to maintain your good habits
      </p>
    </header>
  );
}
