import { useEffect } from "react";

export function TimerInternal() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Timer clicked");
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });
  return <div>Timer</div>;
}
