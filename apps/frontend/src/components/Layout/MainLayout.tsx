import { ReactNode, useState } from "react";
import { Footer } from "./Footer";
import { HamburgerMenu } from "./HamburgerMenu";
import { Header } from "./Header";
import { NextSeo } from "next-seo";

interface MainLayoutProps {
  title?: string;
  children: ReactNode;
}

export const MainLayout = ({
  children,
  title,
}: MainLayoutProps): JSX.Element => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <>
      <NextSeo
        title={title}
        openGraph={{
          title,
        }}
      />
      {isMenuVisible && (
        <HamburgerMenu onClose={() => setIsMenuVisible(false)} />
      )}
      <Header onMenuClick={() => setIsMenuVisible(true)} />
      <main>{children}</main>
      <Footer />
    </>
  );
};
