import { MENU } from "@/constants";
import { PagePaths } from "@/lib/pagePaths";
import Link from "next/link";

interface HeaderProps {
  onMenuClick: () => void;
}

export const Header = ({ onMenuClick }: HeaderProps): JSX.Element => {
  return (
    <header className="fixed z-50 w-full">
      <div className="bg-white rounded-xl m-auto mt-12 px-6 py-2 w-11/12 flex justify-between shadow-lg">
        <Link href={PagePaths.index()}>
          <img src="/logo.svg" alt="logo" className="w-10" />
        </Link>

        <nav className="md:flex md:flex-col-reverse hidden">
          <ul className="flex">
            {MENU.map((item, index) => {
              return (
                <li
                  key={index}
                  className="ml-7 font-medium text-primary cursor-pointer"
                >
                  <Link href={item.href}>{item.label}</Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <img
          src="/bars-solid.svg"
          alt="menu"
          className="w-7 cursor-pointer md:hidden"
          onClick={onMenuClick}
        />
      </div>
    </header>
  );
};
