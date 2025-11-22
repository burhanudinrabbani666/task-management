import { GithubLogoIcon } from "@phosphor-icons/react";

export function Footer() {
  return (
    <footer className="mb-4 flex items-center justify-between gap-4 px-4">
      <span> &copy; 2025 Burhanudin Rabbani.</span>
      <a
        href="https://github.com/burhanudinrabbani666"
        target="_blank"
        className="cursor-pointer"
      >
        <GithubLogoIcon weight="duotone" size={24} />
      </a>
    </footer>
  );
}
