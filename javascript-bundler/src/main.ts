import "./style.css";
import { setupCounter } from "./counter.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1 class="font-bold">Hello World</h1>
      <button class="bg-amber-500 p-2 rounded" id="counter" type="button"></button>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
