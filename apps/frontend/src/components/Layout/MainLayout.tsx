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
      {/* TODO: リリース時にnoindex削除 */}
      <NextSeo
        title={title}
        noindex
        nofollow
        openGraph={{
          title,
        }}
        twitter={{
          cardType: "summary_large_image",
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
