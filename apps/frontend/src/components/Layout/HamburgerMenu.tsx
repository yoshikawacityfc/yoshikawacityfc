import { MENU } from "@/constants";
import { PagePaths } from "@/lib/pagePaths";
import Link from "next/link";

interface HamburgerMenuProps {
  onClose: () => void;
}

export const HamburgerMenu = ({ onClose }: HamburgerMenuProps): JSX.Element => {
  return (
    <div className="w-full h-full fixed z-[100] bg-secondary/80 backdrop-blur-lg overscroll-contain p-4">
      <div className="text-right" onClick={onClose}>
        閉じる
      </div>

      <Link href={PagePaths.index()}>
        <img src="/logo.svg" alt="logo" className="w-20 mb-12 m-auto" />
      </Link>

      <nav>
        <ul>
          {MENU.map((item, index) => {
            return (
              <Link href={item.href} key={index}>
                <li className="text-primary text-2xl cursor-pointer py-4 border-b-[1px] border-gray-600">
                  <span className="">{item.label}</span>
                </li>
              </Link>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
