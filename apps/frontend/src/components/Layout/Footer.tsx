import { MENU } from "@/constants";
import Link from "next/link";

export const Footer = (): JSX.Element => {
  return (
    <footer className="h-72 bg-primary text-secondary">
      <ul className="sm:flex h-5/6 items-center justify-center p-4">
        {MENU.map((item, index) => {
          return (
            <li key={index} className="mx-4 mb-4 cursor-pointer">
              <Link href={item.href}>{item.label}</Link>
            </li>
          );
        })}
      </ul>

      <p className="text-center font-light text-xs sm:text-base">
        Copyright© YOSHiKAWA CiTY FC All Rights Reserved.
      </p>
    </footer>
  );
};
