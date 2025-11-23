import dayjs from "dayjs";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const quote = [
  "You have power over your mind - not outside events. Realize this, and you will find strength.",
  "The happiness of your life depends upon the quality of your thoughts.",
  "Dwell on the beauty of life. Watch the stars, and see yourself running with them.",
  "Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.",
];

type quote = {
  id: number;
  name: string;
  quote: Array<string>;
};

type Quotes = quote[];
const quotes: Quotes = [
  {
    id: 1,
    name: "Marcuc Airelius",
    quote: [
      "You have power over your mind - not outside events. Realize this, and you will find strength.",
      "The happiness of your life depends upon the quality of your thoughts.",
      "Dwell on the beauty of life. Watch the stars, and see yourself running with them.",
      "Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.",
    ],
  },
  {
    id: 2,
    name: "Seneca",
    quote: [
      "Sometimes even to live is an act of courage.",
      "Luck is what happens when preparation meets opportunity.",
      "We suffer more often in imagination than in reality",
      "All cruelty springs from weakness.",
    ],
  },
  {
    id: 3,
    name: "Epictetus",
    quote: [
      "Don't explain your philosophy. Embody it.",
      "Wealth consists not in having great possessions, but in having few wants.",
      "It's not what happens to you, but how you react to it that matters.",
      "If you want to improve, be content to be thought foolish and stupid.",
    ],
  },
];

const dayTime = dayjs().format("D MMMM YYYY");

export function Top() {
  const getId = Math.trunc(Math.random() * quotes.length);
  const getQuote = Math.trunc(Math.random() * quotes[getId].quote.length);
  return (
    <div className="my-8 flex items-center justify-between px-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button className="bg-amber-100 text-neutral-600" variant="ghost">
            {" "}
            Quote
          </Button>
        </PopoverTrigger>
        <PopoverContent className="ml-10">
          <div className="space-y-3">
            <div className="flex gap-2 border-b border-b-neutral-300 py-2">
              <span>{quotes[getId].name}</span>
            </div>
            <p>{quotes[getId].quote[getQuote]}</p>
            <span className="opacity-35">Tap any where to close</span>
          </div>
        </PopoverContent>
      </Popover>
      <span>{dayTime}</span>
    </div>
  );
}
