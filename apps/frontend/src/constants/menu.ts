import { PagePaths } from "@/lib/pagePaths";
import { faFutbolBall } from "@fortawesome/free-regular-svg-icons";
import {
  faPeopleGroup,
  faEnvelope,
  faPenNib,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

export const MENU = [
  { icon: faFutbolBall, label: "クラブコンセプト", href: PagePaths.concept() },
  { icon: faPeopleGroup, label: "チーム", href: PagePaths.team() },
  { icon: faEnvelope, label: "お知らせ", href: PagePaths.news() },
  { icon: faPenNib, label: "入会案内", href: PagePaths.entry() },
  { icon: faPaperPlane, label: "お問い合わせ", href: PagePaths.contact() },
];
