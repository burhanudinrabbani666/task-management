import { List } from "@phosphor-icons/react";

export function Navigation() {
  return (
    <nav className="flex justify-between px-6 pt-12">
      <button className="cursor-pointer rounded-full px-2 hover:bg-neutral-200">
        <List size={24} />
      </button>
      <form method="get">
        <label htmlFor="" className="hidden">
          Search
        </label>
        <input
          type="search"
          name="q"
          id="q"
          placeholder="Search"
          className="rounded-2xl bg-neutral-50 px-3 py-2 indent-2 text-neutral-500"
        />
      </form>
      <img src="/logo.svg" alt="logo" className="w-6" />
    </nav>
  );
}
