export const Footer = (): JSX.Element => {
  return (
    <footer className="h-72 bg-primary text-secondary">
      <ul className="flex h-5/6 items-center justify-center">
        <li>
          YCFCとは<span className="mx-4">|</span>
        </li>
        <li>
          クラブコンセプト<span className="mx-4">|</span>
        </li>
        <li>
          事業<span className="mx-4">|</span>
        </li>
        <li>
          社会貢献活動<span className="mx-4">|</span>
        </li>
        <li>お問い合わせ</li>
      </ul>

      <p className="text-center">
        Copyright© YOSHiKAWA CiTY FC All Rights Reserved.
      </p>
    </footer>
  );
};
