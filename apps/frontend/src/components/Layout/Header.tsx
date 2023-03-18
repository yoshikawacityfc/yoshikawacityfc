import { PagePaths } from "@/lib/pagePaths";
import Link from "next/link";

export const Header = (): JSX.Element => {
  const MENU = [
    { label: "クラブコンセプト", href: PagePaths.concept() },
    { label: "チーム", href: PagePaths.team() },
    { label: "お知らせ", href: PagePaths.news() },
    { label: "入会案内", href: PagePaths.entry() },
    { label: "お問い合わせ", href: PagePaths.contact() },
  ];

  return (
    <header className="fixed z-50 w-full">
      <div className="bg-white rounded-xl m-auto mt-12 px-6 py-2 w-11/12 flex justify-between shadow-lg">
        <img src="/logo.svg" alt="logo" className="w-10" />

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
        />
      </div>
    </header>
  );
};
