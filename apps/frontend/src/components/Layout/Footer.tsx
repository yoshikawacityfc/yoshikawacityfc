export const Footer = (): JSX.Element => {
  return (
    <footer className="h-72 bg-primary text-secondary">
      <ul className="sm:flex h-5/6 items-center justify-center p-4">
        <li className="mx-4 mb-4">YCFCとは</li>
        <li className="mx-4 mb-4">クラブコンセプト</li>
        <li className="mx-4 mb-4">事業</li>
        <li className="mx-4 mb-4">社会貢献活動</li>
        <li className="mx-4 mb-4">お問い合わせ</li>
      </ul>

      <p className="text-center font-light text-xs sm:text-base">
        Copyright© YOSHiKAWA CiTY FC All Rights Reserved.
      </p>
    </footer>
  );
};
