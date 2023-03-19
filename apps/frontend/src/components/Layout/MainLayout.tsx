import { ReactNode, useState } from "react";
import { Footer } from "./Footer";
import { HamburgerMenu } from "./HamburgerMenu";
import { Header } from "./Header";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps): JSX.Element => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <>
      {isMenuVisible && (
        <HamburgerMenu onClose={() => setIsMenuVisible(false)} />
      )}
      <Header onMenuClick={() => setIsMenuVisible(true)} />
      <main>{children}</main>
      <Footer />
    </>
  );
};
