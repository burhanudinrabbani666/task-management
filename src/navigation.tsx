export function Navigation() {
  return (
    <nav className="flex justify-between w-full px-4 pt-12 pb-4">
      <button>
        <img src="/public/menu.svg" alt="" />
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
          className=" rounded-2xl indent-2 bg-neutral-50 px-3 py-2 text-neutral-500 w-60"
        />
      </form>
      <img src="/public/Logo.svg" alt="logo" className="w-6" />
    </nav>
  );
}
