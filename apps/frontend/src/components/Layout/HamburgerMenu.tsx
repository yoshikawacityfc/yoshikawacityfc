import { INSTAGRAM_URL, LINE_URL, MENU } from "@/constants";
import { PagePaths } from "@/lib/pagePaths";
import Link from "next/link";
import { Icon } from "../Elements";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLine } from "@fortawesome/free-brands-svg-icons";

interface HamburgerMenuProps {
  onClose: () => void;
}

export const HamburgerMenu = ({ onClose }: HamburgerMenuProps): JSX.Element => {
  return (
    <div className="w-full h-full fixed z-[100] bg-secondary/80 backdrop-blur-lg overscroll-contain p-4">
      <div className="text-right mb-4">
        <Icon icon={faXmark} onClick={onClose} size="4xlarge" />
      </div>

      <Link href={PagePaths.index()}>
        <img src="/logo.svg" alt="logo" className="w-20 mb-12 m-auto" />
      </Link>

      <nav className="ml-4">
        <ul>
          {MENU.map((item, index) => {
            return (
              <Link href={item.href} key={index}>
                <li className="text-primary text-2xl cursor-pointer py-4">
                  <Icon icon={item.icon} size="xlarge" className="mr-4" />
                  <span className="">{item.label}</span>
                </li>
              </Link>
            );
          })}
        </ul>
      </nav>

      <div className="mt-16 flex justify-center">
        <Link href={LINE_URL} className="mx-2">
          <Icon icon={faLine} size="4xlarge" />
        </Link>
        <Link href={INSTAGRAM_URL} className="mx-2">
          <Icon icon={faInstagram} size="4xlarge" />
        </Link>
      </div>
    </div>
  );
};
