import dayjs from "dayjs";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const quote = [
  "You have power over your mind - not outside events. Realize this, and you will find strength.",
  "The happiness of your life depends upon the quality of your thoughts.",
  "Dwell on the beauty of life. Watch the stars, and see yourself running with them.",
  "Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.",
];

const dayTime = dayjs().format("D MMMM YYYY");

export function Top() {
  return (
    <div className="my-8 flex justify-between px-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            className="border-none bg-amber-200 text-neutral-600"
            variant="ghost"
          >
            {" "}
            Quote
          </Button>
        </PopoverTrigger>
        <PopoverContent className="mx-60 h-36">
          <div className="space-y-2">
            <div className="flex gap-2">
              <img src="/public/marcus.png" alt="" />
              <span>Marcus Aurelius</span>
            </div>
            <p>{quote[Math.trunc(Math.random() * 3)]}</p>
            <span className="opacity-35">Tap any where to close</span>
          </div>
        </PopoverContent>
      </Popover>
      <span>{dayTime}</span>
    </div>
  );
}
