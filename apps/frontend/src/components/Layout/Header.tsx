export const Header = (): JSX.Element => {
  const MENU = [
    { label: "YCFCとは" },
    { label: "クラブコンセプト" },
    { label: "事業" },
    { label: "社会貢献活動" },
    { label: "お問い合わせ" },
  ];

  return (
    <header className="fixed z-50 w-full">
      <div className="bg-white rounded-xl m-auto mt-12 px-6 py-2 w-11/12 flex justify-between shadow-lg">
        <img src="../logo.svg" alt="logo" className="w-10" />

        <nav className="md:flex md:flex-col-reverse hidden">
          <ul className="flex">
            {MENU.map((item, index) => {
              return (
                <li
                  key={index}
                  className="ml-7 font-medium text-primary cursor-pointer"
                >
                  {item.label}
                </li>
              );
            })}
          </ul>
        </nav>

        <img
          src="../bars-solid.svg"
          alt="menu"
          className="w-7 cursor-pointer md:hidden"
        />
      </div>
    </header>
  );
};
