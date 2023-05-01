import { INSTAGRAM_URL, LINE_URL, MENU } from "@/constants";
import { faInstagram, faLine } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { Icon } from "../Elements";

export const Footer = (): JSX.Element => {
  return (
    <footer className="h-96 sm:h-56 flex flex-col justify-around bg-primary text-secondary">
      <ul className="sm:flex items-center justify-center p-4">
        {MENU.map((item, index) => {
          return (
            <li key={index} className="mx-4 mb-4 cursor-pointer">
              <Link href={item.href}>{item.label}</Link>
            </li>
          );
        })}
      </ul>

      <div className="mb-4 flex justify-center">
        <Link href={LINE_URL} className="mx-2">
          <Icon icon={faLine} color="white" size="4xlarge" />
        </Link>
        <Link href={INSTAGRAM_URL} className="mx-2">
          <Icon icon={faInstagram} color="white" size="4xlarge" />
        </Link>
      </div>

      <p className="text-center font-light text-xs sm:text-base pb-2">
        Copyright© YOSHiKAWA CiTY FC All Rights Reserved.
      </p>
    </footer>
  );
};
